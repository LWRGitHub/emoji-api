# Emoji API

This is a locally hosted emoji API. You can do a GET request and you will receive JSON data on all the available emojis, ***"as seen below"***. Also you can send a POST of the emoji name `{ "word": "astonished" }` & you will receive the data on that specific emoji `{ "emoji": "😲" }`.


***Response from a GET request***
```
[
    {"name":"100","emoji":"💯","polarity":3},
    {"name":"angry","emoji":"😠","polarity":-3},
    {"name":"anguished","emoji":"😧","polarity":-3},
    {"name":"astonished","emoji":"😲","polarity":2},
    {"name":"black_heart","emoji":"🖤","polarity":3},
     ... 
]
```


## Installation

```
git clone https://github.com/LWRGitHub/emoji-api.git
cd emoji-api
npm install
npm start
```


## Using API

- `npm start` runs on localhost:3000
- Call the API using [Postman](https://www.postman.com/): 
    - type `localhost:3000/` in Postman address bar
    - select the **Body** option
    - POST:
        - select the **raw** & **JSON** options, ***see pic***
        <img alt="Screen shot of POST request in Postman app." width="75%"  src="https://raw.githubusercontent.com/lwrgithub/emoji-api/master/img/postman-post.png" />

        - Send something like: `{ "word": "grin" }`
        - Get back: `{ "emoji": "😁" }`
        - Click **Send**
    - GET:
        - select the **none** option, ***see pic***
        <img alt="Screen shot of GET request in Postman app." width="75%"  src="https://raw.githubusercontent.com/lwrgithub/emoji-api/master/img/postman-get.png" />

        - Click **Send**
        