const { User } = require("../../db/userEntity");
const jwt = require("jsonwebtoken");

const SECRET_KEY = 'clave_secreta';

const postUser = async(req, res)=>{
  try{
    const data = req.body;
    console.log(data)
    const newUser = await User.create(data);
    res.status(200).send(newUser);
  }catch(err){
    console.log('error en la creacion de usuario', err);
  }
};

const loggin = async(req, res)=>{
  const { user, password } = req.body;
  console.log("valores del req.body", user, password);
  const existUser = await User.findOne({
    where:{
      user: req.body.user,
      password: req.body.password
    }
  });
  if(existUser){
    const token = jwt.sign({user}, SECRET_KEY);
    console.log("token:", token);
    res.json({ token });
    console.log('funciono')
  }else{
    res.status(401).json({error: 'credenciales invalidas'});
  }
}
module.exports={
  postUser,
  loggin
}