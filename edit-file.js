'use strict'

const fs = require('fs')


fs.readFile(`${__dirname}/data/person.json`,(error,data) => {
    if (error){
        console.log(error);
    }else{
        console.log(data.toString())
        editt(data)
    }
})