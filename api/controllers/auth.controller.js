import User from "../models/User.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res
      .status(404)
      .json({ message: "Username, Email and the password are required" });
  }
  //const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password,
  });
  try {
    const createdUser = await newUser.save();
    res.status(201).json({ message: "Sign-Up Successful", user: createdUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erreur interne du server", error });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(404)
      .json({ message: "Email and the password are required" });
  }

  try {
    const newUser = await User.findOne({ email, password });
    console.log(newUser);
    if (!newUser) {
      return res
        .status(404)
        .json({ message: "Incorrect email or password..." });
    }
    console.log(newUser);
    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erreur interne du server", error });
  }
};
