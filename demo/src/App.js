import logo from './logo.svg';
import './App.css';
import Widget_CCAT from "widget-ccat-v2";

function App() {
  return (
    <div>
      <Widget_CCAT
        baseUrl="cat.winelovers.pro"
        host="cat.winelovers.pro"
        secure={true}
        port="443"
        userID="user"
        closed_icon="https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg"
        open_icon="https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg"
        sockets_await={5}
        widget_width={330}
        widget_height={600}
        translatedText={{
          en: {
            initialPhrase: "Welcome, how may I assist you today?",
            sorryPhrase: "Sorry , something went wrong ...",
            chatUnderneathMessage:
              "The assistant sometimes can 'lie', please take care.",
            widget_loading_message: "Loading, please wait...",
            process_wait_text: "Please wait till the proccess has finished.",
          },
        }}
      />
    </div>
  );
}

export default App;
