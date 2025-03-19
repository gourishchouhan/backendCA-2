const express = require('express');
const {users, updateUser, deleteUser} = require('./user')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/',(req, res)=>{
    res.send("Server is running")
});

app.put('/update-user', (req,res)=>{
    const{email,password} = req.body;
    if(!email || !password) return res.status(400).json({error:"email and pass req"});

    const updatedUser = updateUser(email, password);
    if(!updatedUser) return res.status(404).json({error:"user not found"});

    res.json({message:"user updated Successfully", user:updatedUser})
})

app.delete('/delete-user', (req, res) =>{
    const{email} = req.body;
    if(!email) return res.status(400).json({error: "Email is required"})
    
    const deletedUser = deleteUser(email);
    if(!deletedUser) return res.status(404).json({error:"User not Found"})

    res.json({message:'User deleted successfully'})
})

app.listen(PORT,()=> console.log(`Server is running on port ${PORT} `))
