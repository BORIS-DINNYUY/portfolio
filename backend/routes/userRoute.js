const User = require('./Models/userModel')

app.post('/signup', async (req,res) => {
    let {name,email,password} = req.body 

    try{
        let user = new User({
            name,
            email,
            password
        })
       let createdUser = await user.save() 
       res.status(201).json({
        status : 'Success',
        data : {
            createdUser
        }
    })
    }catch(err){
        console.log(err)
    }
})