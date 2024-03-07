const User = require('../model/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id)=>{
   return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

// login user 
const loginUser = async(req, res)=>{

    const {email, password} = req.body

    try{
        const user = await User.login(email, password)

        // create token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

// signup user 
const signupUser = async (req, res)=>{
    const {email, password} = req.body

    try{
        const user = await User.signup(email, password)

        // create token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }catch (error){
        res.status(400).json({error: error.message})
    }

}

const getUsers =  async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  };





module.exports = {loginUser, signupUser, getUsers}
