const  express = require('express') 
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()

app.use(express.json()) ; 
app.use(cors()); 


const saveEmailSchema =  mongoose.Schema({
    email: String,
  }); 


 const SaveEmail = mongoose.model('SaveEmail' , saveEmailSchema) 


 mongoose.connect('mongodb+srv://harsh:Geetasingh%40098@cluster0.wifoeru.mongodb.net/?retryWrites=true&w=majority', { dbName: "checob" });

 app.get('/', (req, res) => {
    res.send('Hello World')
  })
  
 app.post('/saveemail' ,async(req,res) => {
     
    const email =  req.body.email 

    const obj = new SaveEmail( {
        email
    })

    obj.save() 

    res.status(200).json({message : "saved email successfully"})
 })
 
 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
 });