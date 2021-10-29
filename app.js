const request = require('request');
const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('/Public'))
var options = {
  'method': 'POST',
  'url': 'https://b5jg47vjnl.execute-api.us-east-1.amazonaws.com/prod/',
  'headers': {
    'x-api-key': 'AgRm3RW4OtBLY54hIDgO87WlaBAFT3Y6RUdravAb',
    'Content-Type': 'text/plain'
  },
  body: '{\n    "start": "2021-09-09T17:17:37.489Z",\n    "end": "2021-09-12T17:17:37.489Z"\n}'

};

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + '/Public/index.html'))
})

app.get('/data', (req,res)=>{
    request(options, function (error, response) {
        if (error) {
            res.send(new Error(error))
        }else{
            //console.log(response.body);
            res.send(response.body)
        }
        
      });
})

app.listen(3000, ()=>{
    console.log(`Server listening on port 3000`)
})
