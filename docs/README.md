# Emoji API
locally hosted emoji API. Do a GET and get JSON of emoji data ***as seen below***. Also do a POST of the emoji name & receive the data on that specific emoji.

```
[
    {"name":"100","emoji":"💯","polarity":3},
    {"name":"angry","emoji":"😠","polarity":-3},
    {"name":"anguished","emoji":"😧","polarity":-3},
    {"name":"astonished","emoji":"😲","polarity":2},
    {"name":"black_heart","emoji":"🖤","polarity":3},
     ... 
]


## Installation

1. Fork this repository and clone your fork locally.
1. Open the repository folder in your editor of choice:

```
cd emoji-api
npm install
npm start
```

## Using API

- `npm start` runs on localhost:3000
- Call using [Postman](https://www.postman.com/): 
    - type "localhost:3000/" in Postman address bar
    - select the "Body" option
    - POST:
        - select the "raw" & "JSON" options, ***see pic***
        <img alt="Screen shot of POST request in Postman app." width="75%" src="https://github.com/lwrgithub/emoji-api/blob/master/img/postman-post.png" />

        - Send something like: { "word": "grin" }
        - Get back: { "emoji": "😁" }
        - Click "Send"
    - GET:
        - select the "none" option, ***see pic***
        <img alt="Screen shot of GET request in Postman app." width="75%" src="https://github.com/lwrgithub/emoji-api/blob/master/img/postman-get.png" />

        - Click "Send"