# Chat widget

/// DESCRIPTION HERE

## Usage

In order to use the widget, in your HTML file ad the following:

```html
<script
  async
  data-widget
  src="{server_url}/widget.js"
  data-host="{server_url}"
  data-userId="randomuserid"
  data-openIcon="https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg"
  data-closedIcon="https://officeofcards.com/wp_publifarm/wp-content/uploads/2022/09/officeofcards-logo-black.svg"
  data-secure="false"
  data-width="300"
  data-height="500"
  data-messages='{"en":{"initialPhrase": "Welcome, how may I assist you today?", "examplePhrase": "Feel free to ask anything!", "sorryPhrase": "Sorry, something went wrong ...", "chatUnderneathMessage": "The assistant sometimes can lie, please take care."}, "it": {"initialPhrase": "Benvenuto, come posso aiutarti oggi?", "sorryPhrase": "Mi dispiace, qualcosa è andato storto...","examplePhrase":"Sentiti libero di chiedere qualsiasi cosa!", "chatUnderneathMessage": "L`assistente a volte può mentire, fai attenzione."}}'
/>
```

### PARAMETERS

| Attribute       | Description                                    | Required | Default                                                                                                                                                                                                                                         |
| --------------- | ---------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data-widget     | Required to recognise the script attributes    | ✅       | null                                                                                                                                                                                                                                            |
| data-host       | URL of CAT server                              | ✅       | <http://localhost>                                                                                                                                                                                                                                |
| data-userId     | Random user id to be used in CAT               | ✅       | any                                                                                                                                                                                                                                             |
| data-selector   | HTML selector to be rendered inside an element | ⬜       | body                                                                                                                                                                                                                                            |
| data-openIcon   | Icon url when chat is opened                   | ✅       | <https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg>                                                                                                                                                                       |
| data-closedIcon | Icon url when chat is closed                   | ✅       | <https://cheshire-cat-ai.github.io/docs/assets/img/cheshire-cat-logo.svg>                                                                                                                                                                       |
| data-messages   | Default messages of the widget                 | ✅       | {"en":{"initialPhrase": "Welcome, how may I assist you today?", "examplePhrase": "Feel free to ask anything!", "sorryPhrase": "Sorry, something went wrong ...", "chatUnderneathMessage": "The assistant sometimes can lie, please take care."} |
| data-width      | The width of the widget                        | ✅       | 300                                                                                                                                                                                                                                             |
| data-height     | The height of the widget                       | ✅       | 400                                                                                                                                                                                                                                             |


### TODO

- Add translations : ✅
- Support remaining features (streaming, translation)

