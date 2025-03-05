import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./styles/widget_CCAT.css";

import TextField from "@mui/material/TextField";
import { IoSend } from "react-icons/io5";
import Button from "@mui/material/Button";
import { CatClient } from "ccat-api";

const Widget_CCAT = ({
  baseUrl = "localhost",
  port = "1865",
  userID = "user",
  secure = false,
  open_icon = "https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg",
  closed_icon = "https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg",
  sockets_await = 5,
  widget_width = 900,
  widget_height = 800,

  translatedText = {
    en: {
      initialPhrase: "Welcome, how may I assist you today?",
      sorryPhrase: "Sorry , something went wrong ...",
      chatUnderneathMessage:
        "The assistant sometimes can 'lie', please take care.",
      widget_loading_message: "Loading, please wait...",
      process_wait_text: "Please wait till the process has finished.",
      exampleText:
        "Feel free to ask anything!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
  },
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [canAnimate, setCanAnimate] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesContainerRef = useRef(null);
  const [gatto_attivo, setGattoAttivo] = useState(false);
  const [cat, setcat] = useState(false);

  const [spinner, setSpinner] = useState(true);

  const socketCounter = useRef(0);
  const clientFlag = useRef(false);

  const userPreferredLang = navigator.language; //the return value is  for example : en-EN
  const languageCode = userPreferredLang.split("-")[0];

  // this function in combination with the above json , helps us determine
  // the preferred Language of the user's browser
  const translator = (phrase) => {
    const language = translatedText[languageCode] || translatedText["en"];
    return (
      language[phrase] ||
      console.log(`Error , translation for ${phrase} not found.`)
    );
  };

  // function that gets the chat view on the bottom on every new update on the messages
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // this function handles the messages received from the Cat
  // where it concatenates the most recent token to the most recent messages.text
  const msgTokenAdd = (msg) => {
    setMessages((prevMessages) => {
      // Create a copy of the last message and append the new token
      const updatedMessages = [...prevMessages];
      const latestMessage = { ...updatedMessages[updatedMessages.length - 1] };
      latestMessage.text += msg;
      if (latestMessage.sender === "bot_writing") {
        latestMessage.sender = "bot"; // we have to change the sender from bot_writing to bot to disable the loading dots
      }
      // Replace the last message with the updated one
      updatedMessages[updatedMessages.length - 1] = latestMessage;

      return updatedMessages;
    });
  };

  // this function handles the message exchange from the part of the user
  const sendMessage = async () => {
    if (input !== "") {
      if (gatto_attivo) {
        setIsProcessing(true);
        setMessages([...messages, { text: input, sender: "user" }]);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "", sender: "bot_writing" },
        ]);
        setInput("");

        try {
          cat.send(input);
          cat
            .onConnected(() => {
              console.log("Socket connected");
            })
            .onMessage((msg) => {
              console.log(`MESSAGE CONTENT: ${msg}\n`); // for debug
              // Split the message content into words
              msgTokenAdd(msg.content);
              if (msg.type === "chat") {
                //              the last message sent is an object containing all the generated message under
                //              the msg.type = "chat" , so when that comes
                //              we set processing to false in order to be able to write
                //              again to the bot
                //              You might want to enable/disable it base on whether your llm is a streaming model or not
                //              the way the current widget works is suitable for streaming
                setIsProcessing(false);
              }
            })
            .onError((err) => {
              console.log(err);
              setMessages((prevMessages) => [
                ...prevMessages,
                {
                  text: translator("sorryPhrase"),
                  sender: "bot",
                },
              ]);
            })
            .onDisconnected(() => {
              console.log("Socket disconnected");
            });
        } catch (error) {
          console.error("Error receiving bot response :", error);
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: translator("sorryPhrase"), sender: "bot" },
          ]);
        }
      }
    }
  };

  async function restCCAT() {
    if (!clientFlag.current) {
      // in the original widget by Andrea Pesce , it is : setcat instead of setCat
      setcat(
        new CatClient({
          baseUrl: baseUrl,
          port: port,
          user: userID,
          secure,
        })
          .onConnected(() => {
            console.log(`Socket connected ${socketCounter.current}`);
            clientFlag.current = true;
            setGattoAttivo(true);
            if (socketCounter.current < sockets_await) {
              socketCounter.current++;
              setMessages([
                {
                  text: translator("widget_loading_message"),
                  sender: "bot",
                },
              ]);
            } else {
              setMessages([
                {
                  text: translator("initialPhrase"),
                  sender: "bot",
                },
              ]);
              setSpinner(false);
            }
          })
          .onError((err) => {
            console.log(err);
            setSpinner(false);
            clientFlag.current = true;
            setGattoAttivo(false);
          }),
      );
    }
    if (cat) {
      cat.api.memory.wipeConversationHistory();
    }
  }

  useEffect(() => {
    restCCAT();
  }, [gatto_attivo, socketCounter]);

  const Spinner = () => {
    const mountTime = React.useRef(Date.now());
    const mountDelay = -(mountTime.current % 1000);

    return (
      <div className="spinner-container">
        <div
          className="spinner"
          id="spinner"
          style={{ "--spinner-delay": `${mountDelay}ms` }}
        ></div>
      </div>
    );
  };

  useEffect(() => {
    const targetWindow = window.parent.window;
    const origin = "*";
    //Iframe dimensions
    const openDimensions = {
      width: widget_width * 1.1,
      height: widget_height * 1.1,
    };
    const closedDimensions = { width: 90, height: 90 };

    if (!isOpenChat) {
      targetWindow.postMessage(
        {
          type: "widgetClosed",
          dimensions: closedDimensions,
        },
        origin,
      );
    } else {
      targetWindow.postMessage(
        {
          type: "widgetOpened",
          dimensions: openDimensions,
        },
        origin,
      );
    }
  }, [isOpenChat]);

  const chatStyle = isOpenChat
    ? {
        width: `${widget_width}px`,
        height: `${widget_height}px`,
        overflow: "hidden",
      }
    : {};

  return (
    <motion.div
      className={!isOpenChat ? "cat-icon" : "cat-chat"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ overflow: "hidden" }}
      animate={{
        rotate:
          canAnimate && isHovered && !isOpenChat ? [0, 30, -30, 10, -10, 0] : 0,
        scale: canAnimate && isHovered && !isOpenChat ? 1.2 : 1,
      }}
      onClick={
        !isOpenChat
          ? () => {
              setIsOpenChat(true);
            }
          : null
      }
    >
      <div className={!isOpenChat ? "rectangle-closed" : "rectangle"}>
        {isOpenChat ? (
          <div className="chat-header">
            <div className="rectangle-img-container">
              {/* you can have 2 different images on closed chat and on open chat,
               just change the img source in the constractor */}
              <img
                className="open-chat-icon"
                src={open_icon}
                alt="open chat icon"
              />
            </div>

            <div
              className="close-chat-X"
              onClick={() => {
                setIsOpenChat(false);
              }}
            >
              <svg className="circle-X" viewBox="0 0 24 24">
                <line
                  x1="3"
                  y1="3"
                  x2="21"
                  y2="21"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="3"
                  y1="21"
                  x2="21"
                  y2="3"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        ) : (
          <img
            className="closed-chat-icon"
            src={closed_icon}
            alt="close chat icon"
          />
        )}

        {isOpenChat ? (
          <div className="chat-page">
            <div className="chat-messages" ref={messagesContainerRef}>
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.sender === "bot_writing" ? (
                    <div className="dots">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  ) : (
                    message.text
                  )}
                </div>
              ))}

              {spinner && <Spinner />}
            </div>

            {spinner ? (
              <div style={{ alignSelf: "center" }}>
                {translator("process_wait_text")}
              </div>
            ) : (
              " "
            )}

            {!spinner ? (
              <>
                <div className="chat-input">
                  <TextField
                    label={translator("exampleText")}
                    variant="standard"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyUp={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                    style={{ width: "100%" }}
                    disabled={isProcessing || !gatto_attivo}
                  />
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={sendMessage}
                    disabled={isProcessing || !gatto_attivo}
                  >
                    <IoSend />
                  </Button>
                </div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    margin: "0",
                    color: "#999",
                  }}
                >
                  {translator("chatUnderneathMessage")}
                </p>
              </>
            ) : (
              ""
            )}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Widget_CCAT;
