import express from'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import initAPIRoute from './route/api';

//import connection from './configs/connectDB';


require('dotenv').config();
var morgan = require('morgan')



const app = express()
const port = process.env.PORT;

app.use((req,res,next)=>{
   next();
})


app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
initWebRoute(app);
initAPIRoute(app);

app.use((req,res)=>{
  return res.render('404.ejs')
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})