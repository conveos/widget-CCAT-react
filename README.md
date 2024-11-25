# Cheshire Cat React Widget v2

**This is a fork of the official react widget created by Andrea Pesce on  https://github.com/AndreaPesce200j2/widget-CCAT-react/tree/master**

What was updated/Upgraded :
* The RestCat function now waits till the websockets have stabilised
* The SendMessage Function can now handle streaming messages
* Added a functionality where the chat is not ready mode while the first sockets stabilize ( not well implemented )
* Chat Screen Shows the bottom/newest text while sending/receiving 
* Handling multiple Languages dynamically
* Added the possibility to have open-chat-img and close-chat-img



# How it Works:

The Cheshire Cat React widget is a Simple widget that can be added on you website by as a part of your Application. The design is simple yet effective and makes use of the Cheshire Cat API library . This new version of the Widget is operating on the same design as the widget made by Andrea Pesce with some additional functions and improvements on the way the token streaming is being handled. 

The widget consists of the functions bellow :
* RestCat along with a useEffect hook : a function that initialises a new Cat Connection and websocket stabilisation.
* sendMessage along with a useEffect hook : a function that manages the exchange of messages between the user and the Cat.
* Spinner : a small spinner animation that is being displayed on widget start until the websockets get stabilised.
* msgTokenAdd : a function that handles the token streaming.
* scrollToBottom : A function that keeps the screen view of the widget on the last message exchanged.
* translator : a function that handles the language that the widget's messages are being displayed in , depending on the user's browser preferred language.


## How to Integrate the widget you App : 

**You can clone this widget in the src/ directory of your project and import it on your App.js as bellow**:
```js
import WidgetCCAT from 'widget-ccat';

function App() {
  return (
    <div>
      <WidgetCCAT 
        baseUrl="http://localhost" 
        port="1865"
        closed_icon= "https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg",
        open_icon = "https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg",
        sockets_await = 5,
        widget_width = 330,
        widget_height = 600,

        translatedText = {
          en: {  
            initialPhrase: "Welcome, how may I assist you today?",
            sorryPhrase: "Sorry , something went wrong ...",
            chatUnderneathMessage: "The assistant sometimes can 'lie', please take care.",
            widget_loading_message : "Loading, please wait...",
            proccess_wait_text : "Pl ease wait till the proccess has finished."
            
          }
        } 
      />
    </div>
  );
}
```
# Components and Functionalities

**Where the arguments passed above are :**
|**Arguments** | **Type**      | **Description**               | **Default Value** |
|:-------------:|:-------------:|:------------------------------|:-----------------:|
| baseUrl       | string        | The url to your Cat server    | localhost         |
| port          | string        | The port to your server       | 1865              |
|closed_icon    | string        | The url to the icon that will show when the widget is closed |  https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg|
|open_icon      | string        |  The url to the icon that will show when the widget is closed | https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg  |
|sockets_await  | int           | The number of socket connections in order to let the cat stabilise|5|
|widget_width   | int           | The desired widgth of the widget | 330 |
|widget_height  | int           | The desired widgth of the widget | 600 |
|translatedText | Object        | An object that contains the widget's message texts | see bellow |  

**Where the translatedText contents are :**

|**Object Name**| **Type**    | **Description**             | **Default**       |
|:-------------:|:-------------:|:------------------------------|:------------------|
| LanguageCode  | string        | the 2 character-long of the desired language ( has to be the same with the browser) | 'en'


**And the above Objects' contents:**
|**Arguments** | **Type**      | **Description**               | **Default**           |
|:-------------:|:-------------:|:------------------------------|:----------------------|
|initialPhrase  | string        | The first message displayed when the widget is initialised|"Welcome, how may I assist you today?|
|sorryPhrase    | string        | The message shown by the widget if something goes wrong| "Sorry , something went wrong ..."|
|chatUnderneathMessage|string   | A small message shown under the user input box| "The assistant sometimes can 'lie', please take care."|
|widget_loading_message| string | A message shown by the widget while waiting for the sockets to stabilise| "Loading, please wait..."|
|proccess_wait_text | string    | A message also shown when the widget is waiting for socket stabilisatin | "Please wait till the proccess has finished."|


### RestCat Websocket Stabilization : 

We have noticed that the CCatAPI takes some websocket connection in order to stabilise and be available for use ( in our case it is 5).
So bearing that in mind we have an argument on the widget initialization where you can set these cycles manually ( needs a better implementation )


### The Send Message function : 

The Send message function has been improved on the part of token handling ( if the LLM that is being used by the Cheshire Cat is streaming ), where the new tokens are being concatinated on the response-message. The streaming responses of the CCatAPI send each token in a json object format and are tagged with the element "type" which is either :
* type : chat , the complete response , sent in the end of the response generation
* type : chat-type , NOT SURE IF IS THE CORRECT NAME, token generated to form a complete response 

The way the sendMessage is being implemented in this version of the widget is that we add every token to an response message every time a token is sent, and when the complete response is being sent in the end , we ignore it and set the widget's isProcessing to False.

In order to make the above functionality working we implemented a fucntion msgTokenAdd(msg), where msg is a token.

### Chat Screen Shows the bottom/newest text while sending/receiving 

This is functionality is being deployed by the use of scrollToBottom() function that operates in a useEffect everytime there is a change on the messages Hook.


### Handling multiple Languages dynamically

This functionality works on along with an object argument passed on the widget initialisation of type :
```js
translatedtext = {
  en:{},
  de:{},
  it:{},
  .
  .
  .
}
```
Where there each language must contain the elements bellow:
* initialPhrase
* sorryPhrase
* chatUnderneathMessage
* widget_loading_message
* proccess_wait_text

There is a default Value of translatedText :
```js
traslatedText = {
  en: {  
      initialPhrase: "Welcome, how may I assist you today?",
      sorryPhrase: "Sorry , something went wrong ...",
      chatUnderneathMessage: "The assistant sometimes can 'lie', please take care.",
      widget_loading_message : "Loading, please wait...",
      proccess_wait_text : "Please wait till the proccess has finished."
      
    }
}
```

The functionality above is being handled by the function translator(), where the default preferred language of the browser is being used to determine the display language of the messages show by the bot.

#### Additional Capabilities

* You can also add different images for when the chat is closed and when it is open, just change the parameters of open_icon and close-icon when initializing the widget 


## Useful links

* **cheshire cat docs** : https://cheshire-cat-ai.github.io/docs/
* **cheshire cat clients** : https://cheshire-cat-ai.github.io/docs/production/network/clients/
* **cheshire cat TypeScript API** : https://github.com/cheshire-cat-ai/api-client-ts
* **Andrea Pesce's original React Widget** : https://github.com/AndreaPesce2002/widget-CCAT-react
* **Shadow Users in Cheshire Cat** : https://cheshire-cat-ai.github.io/docs/production/auth/user-management/?h= ( this link is useful if you are interested in having guest sessions )
* **Cheshire Cat Discord Server** : https://discord.com/invite/bHX5sNFCYU
