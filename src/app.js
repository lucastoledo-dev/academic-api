const express = require('express') //importacao do pacote
const app = express() //instanciando express
var cron = require('node-cron');

app.get('/', function (req, res) { //endereco da requisicao onde e retornado hello world
  
  //res.send({progress: 'Star'}) 
  cron.schedule('* * * * * *', () => {
    console.log('running a task every minute');
  });

})
app.listen(3001) //execucao do servidor