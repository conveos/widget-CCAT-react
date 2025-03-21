const script = document.querySelector("script[data-widget]");
const styles = document.createElement("link");
styles.href = "./index.css";
styles.rel = "stylesheet";
styles.type = "text/css";
document.head.appendChild(styles);
const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
link.rel = "stylesheet";
document.head.appendChild(link);


let CONFIGURATION = {
  userId: "",
  host: "http://localhost:1865",
  selector: "body",
  openIcon:
    "https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg",
  closedIcon:
    "https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg",
  width: "300px",
  height: "400px",
  text: {
    en: {
      initialPhrase: "Welcome, how may I assist you today?",
      sorryPhrase: "Sorry , something went wrong ...",
      inputPlaceholder: "Feel free to ask anything!",
      chatNote:
        "The assistant sometimes can lie, please take care.",
    },
  },
};

const userPreferredLang = navigator.language; //the return value is  for example : en-EN
const languageCode = userPreferredLang.split("-")[0];

// this function in combination with the above json , helps us determine
// the preferred Language of the user's browser
const translator = (phrase) => {
  const language = CONFIGURATION.text[languageCode] || CONFIGURATION.text.en;
  return (
    language[phrase] ||
    console.log(`Error , translation for ${phrase} not found.`)
  );
};

let input;
let button;
let logo;
let messages;
let container;
let userId;
const CHAT_MESSAGE_SELECTOR = ".chat-message";

const createElementFromHtml = (html) => {
  const el = document.createElement("template");
  el.innerHTML = html.trim();
  return el.content.firstElementChild;
};

const loading = createElementFromHtml(`
<div class="chat-message chat-loading">
   <span></span><span></span><span></span>
</div>
`);

const widget = createElementFromHtml(
  `
   <div class="chat">
        <img class="chat-logo" src="${CONFIGURATION.closedIcon}" alt="">
        <div class="chat-container">
            <div class="chat-header">
                <button class="close-btn" onclick="toggleChat()">&times;</button>
            </div>
            <div class="chat-messages">
            </div>
            <div class="chat-input">
                <input placeholder="${CONFIGURATION.text.en.inputPlaceholder}" type="text">
                <button onclick="sendMessage()"><i class="material-icons">send</i></button>
            </div>
            <p class="chat-note">${CONFIGURATION.text.en.chatNote}</p>
        </div>
    </div>`
)

const changeLogo = () => {
  logo = document.querySelector(".chat-logo");
  if (widget.classList.contains("chat--active")) {
    logo.src = CONFIGURATION.openIcon;
  }
  else {
    logo.src = CONFIGURATION.closedIcon;
  }
};

const initialize = () => {
  const config_keys = Object.keys(CONFIGURATION);

  config_keys.forEach(key => {
    const val = script.getAttribute(`data-${key}`);
    if (val === null) return;
    CONFIGURATION[key] = val;
  });


  if (CONFIGURATION.selector) {
    document.querySelector(CONFIGURATION.selector).appendChild(widget);
  } else {
    document.body.appendChild(widget);
  }

  input = document.querySelector(".chat-input input");
  input.placeholder = translator("inputPlaceholder");

  container = document.querySelector(".chat-container");
  button = document.querySelector(".chat-input button");
  logo = document.querySelector(".chat-logo");
  messages = document.querySelector(".chat-messages");

  userId = generateUserId();

  const chatNote = document.querySelector(".chat-note");
  chatNote.textContent = translator("chatNote");


  widget.style.setProperty("--widget-active-height", CONFIGURATION.height);
  widget.style.setProperty("--widget-active-width", CONFIGURATION.width);

  logo.addEventListener("click", () => {
    document.querySelector(".chat").classList.add("chat--active");
    changeLogo();
  });

  input.addEventListener("keypress", (ev) => {
    if (!ev.target.value) return;
    if (ev.key === "Enter") sendMessage();
  });

  addMessage("bot", translator("initialPhrase"));
}

const toggleChat = () => {
  const chat = document.querySelector(".chat");
  chat.classList.contains("chat--active") ?
    chat.classList.remove("chat--active") :
    chat.classList.add("chat--active");
  changeLogo();
};

const sendMessage = async () => {
  toggleInput(true);
  let userMessage = input.value.trim();
  input.value = "";

  if (userMessage === "") return;
  addMessage("user", userMessage);
  try {
    const resp = await fetchCatMessage(userMessage);
    addMessage("bot", resp);
    toggleInput(false);
  } catch (error) {
    console.error(error);
  }
};

const addMessage = (sender, message) => {
  let newMessage = document.createElement("div");
  newMessage.classList.add(`chat-message`);
  sender === "user" && newMessage.classList.add("receiver");
  newMessage.innerHTML = `${message}`;

  messages.appendChild(newMessage);
  newMessage.scrollIntoView({ behavior: "smooth" });
};

const fetchCatMessage = async (message) => {
  const headers = new Headers();
  headers.append("user_id", userId);
  headers.append("Content-Type", "application/json");

  showLoading();

  const raw = JSON.stringify({
    text: message,
  });

  const requestOptions = {
    method: "POST",
    headers,
    body: raw,
    redirect: "follow",
  };
  try {
    const response = await fetch(
      `${CONFIGURATION.host}/message`,
      requestOptions,
    );
    let retData = await response.json();
    hideLoading();
    return retData.text;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const showLoading = () => {
  messages.appendChild(loading);
  messages.scrollTop = messages.scrollHeight;
};

const hideLoading = () => {
  messages.removeChild(loading);
};

function toggleInput(disabled) {
  input.disabled = disabled;
  button.disabled = disabled;
}

const generateUserId = () =>{
  const userId = crypto.randomUUID();
  return userId;
}

window.onload = initialize;