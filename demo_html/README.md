# Chat widget

This is a chat-box widget that is powered by the Cheshire Cat AI framework that aims to serve as a digital assistant of your choice. This widget is made in plain html/css/js so that it can be easily installed in any webpage. 

## Usage

In order to use the widget, in your HTML file ad the following:

```html
<script
  async
  data-widget
  src="{server_url}/widget.js"
  data-host="{server_url}"
  data-openIcon="https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg"
  data-closedIcon="https://officeofcards.com/wp_publifarm/wp-content/uploads/2022/09/officeofcards-logo-black.svg"
  data-secure="false"
  data-width="300px"
  data-height="500px"
  data-messages='{"en":{"initialPhrase": "Welcome, how may I assist you today?", "examplePhrase": "Feel free to ask anything!", "sorryPhrase": "Sorry, something went wrong ...", "chatUnderneathMessage": "The assistant sometimes can lie, please take care."} }'
/>
```

### PARAMETERS

| Attribute       | Description                                    | Required | Default                                                                                                                                                                                                                                         |
| --------------- | ---------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data-widget     | Required to recognise the script attributes    | ✅       | null                                                                                                                                                                                                                                            |
| data-host       | URL of CAT server                              | ✅       | <http://localhost>                                                                                                                                                                                                                              |
| data-selector   | HTML selector to be rendered inside an element | ⬜       | body                                                                                                                                                                                                                                            |
| data-openIcon   | Icon url when chat is opened                   | ⬜       | <https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg>                                                                                                                                                                       |
| data-closedIcon | Icon url when chat is closed                   | ⬜       | <https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg>                                                                                                                                                                       |
| data-messages   | Default messages of the widget                 | ⬜        | {"en":{"initialPhrase": "Welcome, how may I assist you today?", "examplePhrase": "Feel free to ask anything!", "sorryPhrase": "Sorry, something went wrong ...", "chatUnderneathMessage": "The assistant sometimes can lie, please take care."} |
| data-width      | The width of the widget                        | ⬜        | 300px                                                                                                                                                                                                                                             |
| data-height     | The height of the widget                       | ⬜        | 400px                                                                                                                                                                                                                                             |

### TODO

- Add translations : ✅
- Support remaining features (streaming, translation)
