const express = require('express') ; 
const app = express() ; 
const port = 3000;

let router = express.Router();

router.get("/", (request, response) => {  
  response.send('Hello from Express!')
})

app.use(router);

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

