// const express = require('express')
// const router = express.Router();
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const emojiEmotion = require('emoji-emotion');


module.exports = (app) => {



    //GET Holds emjis & words 
    app.get('/', (req, res) => {
        return res.json(emojiEmotion)
    })

    //POST send word get emoji
    app.post('/', (req, res) => {

        emojiToUse = ''
        emojiEmotion.forEach( function(obj, index) {
            if( req.body.word == obj.name ){
                emojiToUse = obj.emoji
                
            }
        })
        
        if(emojiToUse === ''){
            return res.json({
                "error": "Could not find emoji."
            })
        } else {
            return res.json({
                "emoji": emojiToUse
            })
        }

        

        
    })

    

    //Delete

    //PUT Edit
}

