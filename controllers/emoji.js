// const express = require('express')
// const router = express.Router();
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const emojiEmotion = require('emoji-emotion');


module.exports = (app) => {



    //GET Holds emjis & words 
    app.get('/emoji', (req, res) => {
        res.json(emojiEmotion)
    })

    //POST send word get emoji
    app.post('/', (req, res) => {

        emojiToUse = ''
        for( obj in emojiEmotion ){
            if( req.body.word === obj.name ){
                emojiToUse = obj.emoji
            }
        }
        
        return res.json({
            emoji: emojiToUse
        })
    })

    

    //Delete

    //PUT Edit
}