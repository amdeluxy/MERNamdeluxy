import Users from "../models/Users.js";
import generateId from "../helpers/generateId.js";
import generateJWT from "../helpers/generateJWT.js";
import { emailRegister, emailForgetPassword} from "../helpers/email.js";


const register = async (req, res) => {
  // Evitar registros duplicados
  const { email } = req.body;
  const userExists = await Users.findOne({ email });

  if (userExists) {
    const error = new Error("User is already registered");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const user = new Users(req.body);
    user.token = generateId();
    await user.save();

    // Enviar el email de confirmacion
    emailRegister({
      name: user.name,
      email: user.email,
      token: user.token,
    });

    res.json({
      msg: "User Created Successfully! Please check your email to confirm your account",
    });
  } catch (error) {
    console.log(error);
  }
};

const authenticate = async (req, res) => {
  const { email, password } = req.body;

  // Comprobar si el usuario existe
  const user = await Users.findOne({ email });
  if (!user) {
    const error = new Error("The User no Found");
    return res.status(404).json({ msg: error.message });
  }

  // Comprobar si el usuario esta confirmado
  if (!user.confirm) {
    const error = new Error("Your account has not been confirmed");
    return res.status(403).json({ msg: error.message });
  }

  // Comprobar su password
  if (await user.checkPassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    });
  } else {
    const error = new Error("The password is incorrect");
    return res.status(403).json({ msg: error.message });
  }
};

const confirm = async (req, res) => {
  const { token } = req.params;
  const userConfirm = await Users.findOne({ token });
  if (!userConfirm) {
    const error = new Error("Token invalid");
    return res.status(403).json({ msg: error.message });
  }

  try {
    userConfirm.confirm = true;
    userConfirm.token = "";
    await userConfirm.save();
    res.json({ msg: "User Confirmed Successfully" });
  } catch (error) {
    console.log(error);
  }
};

const forgetPassword = async (req, res) => {
  const { email } = req.body;
  const user = await Users.findOne({ email });
  if (!user) {
    const error = new Error("The User no Exist");
    return res.status(404).json({ msg: error.message });
  }

  try {
    user.token = generateId();
    await user.save();

    // Enviar el email
    emailForgetPassword({
      email: user.email,
      name: user.name,
      token: user.token,
    });

    res.json({ msg: "We have sent an email with instructions" });
  } catch (error) {
    console.log(error);
  }
};

const checkToken = async (req, res) => {
  const { token } = req.params;

  const tokenValid = await Users.findOne({ token });

  if (tokenValid) {
    res.json({ msg: "Valid token and the user exists" });
  } else {
    const error = new Error("Token invalid");
    return res.status(404).json({ msg: error.message });
  }
};

const newPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const user = await Users.findOne({ token });

  if (user) {
    user.password = password;
    user.token = "";
    try {
      await user.save();
      res.json({ msg: "Password Modified Successfully." });
    } catch (error) {
      console.log(error);
    }
  } else {
    const error = new Error("Token Invalid");
    return res.status(404).json({ msg: error.message });
  }
};

const perfil = async (req, res) => {
  const { user } = req;

  res.json(user);
};

export {
  register,
  authenticate,
  confirm,
  forgetPassword,
  checkToken,
  newPassword,
  perfil,
};