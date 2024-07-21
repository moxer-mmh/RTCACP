import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);

    res.status(200).json(users);
  } catch (error) {
    console.error("Error on getUsersForSideBar", error.message);
    res.status(500).json({ error: "Something went wrong." });
  }
};
