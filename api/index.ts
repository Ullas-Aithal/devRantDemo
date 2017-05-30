import * as express from 'express';
import * as devRant from 'devrant';

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',(req:express.Request, res:express.Response)=>{

   devRant
  .rant(43511)
  .then(rant => {
  res.send(rant);
})

  .catch((err) => {
  console.log('err: ', err.message);
  });
    
});

app.listen(3000,()=>{console.log("Listening on 3000")});

