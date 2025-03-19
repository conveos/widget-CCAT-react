# Chat widget 

/// DESCRIPTION HERE


## Usage

In order to use the widget, in your HTML file ad the following:
```html
    <script async
     data-widget
     src="{server_url}/widget.js"
     data-host="{server_url}"
     data-userId="randomuserid" 
    />
```
 ### PARAMETERS

| Attribute   | Description   | Required |Default   
| --------------- | --------------------- | ---------- | ----------- |
| data-widget     | Required to recognise the script attributes | ✅ | null
| data-host       | URL of CAT server |  ✅ | http://localhost
| data-userId     | Random user id to be used in CAT | ✅ | any
| data-selector | HTML selector to be rendered inside an element | ⬜ | body

URGENT 
closed_icon
open_icon
translatedText

NOT SO URGENT
widget_width
widget_height


### TODO 
- Add translations
- Support remaining features (streaming, translation)