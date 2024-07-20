import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, userName, email, password, confirmPassword, gender } =
      req.body;

    if (
      !fullName ||
      !userName ||
      !email ||
      !password ||
      !confirmPassword ||
      !gender
    ) {
      return res.status(400).json({ error: "All fields are required." });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match." });
    }

    const existingUser = await User.findOne({ userName });
    const existingEmail = await User.findOne({ email });

    if (existingUser) {
      console.log(`Existing username found: ${userName}`);
      return res.status(400).json({ error: "Username already exists." });
    }

    if (existingEmail) {
      console.log(`Existing email found: ${email}`);
      return res.status(400).json({ error: "Email already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      email,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      await generateTokenAndCookie(newUser._id, res);
      await newUser.save();

      console.log(`User created: ${newUser._id}, ${newUser.userName}`);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalide user data." });
    }
  } catch (error) {
    console.error("Error on signup", error.message);
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ error: "Username or email already exists." });
    }
    res.status(500).json({ error: "Something went wrong." });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!isPasswordCorrect && user) {
      return res.status(400).json({ error: "Invalid password." });
    }

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    generateTokenAndCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error("Error on login", error.message);
    res.status(500).json({ error: "Something went wrong." });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully." });
  } catch (error) {
    console.error("Error on logout", error.message);
    res.status(500).json({ error: "Something went wrong." });
  }
};
