import logo from './logo.svg';
import './App.css';
import Widget_CCAT from "widget-ccat-v2";
//import Widget_CCAT from "./widgetCcat";

function App() {
  return (
    <div>
      <Widget_CCAT
        baseUrl="cat.winelovers.pro"
        port=""
        userID="user"
        secure={true}
        closed_icon="https://officeofcards.com/wp_publifarm/wp-content/uploads/2022/09/officeofcards-logo-black.svg"
        open_icon="https://officeofcards.com/wp_publifarm/wp-content/uploads/2022/09/officeofcards-logo-black.svg"
        sockets_await={5}
        widget_width={400}
        widget_height={600}
        translatedText={{
          en: {
            initialPhrase:
              "Ciao, sono la versione digitale di Davide Cervellin! Come posso aiutarti?",
            sorryPhrase: "Spiacente, qualcosa è andato storto...",
            chatUnderneathMessage:
              "L'assistente a volte può 'mentire', fai attenzione.",
            widget_loading_message: "Caricamento in corso, attendere prego...",
            process_wait_text: "Attendere fino al completamento del processo.",
            exampleText: "Sentiti libero di chiedere qualsiasi cosa!",
          },
        }}
      />
    </div>
  );
}

export default App;
