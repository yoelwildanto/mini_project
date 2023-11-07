const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.User;
const Role = db.Role;

exports.login = async function (req, res) {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET_KEY
    );
    res.status(200).json({ user: user, token: token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.register = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      where: { email: req.body.email },
    });
    if (existingUser) {
      return res.status(400).json({ message: "Email already used" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const referralCode = jwt.sign(
      { fullname: req.body.fullname, email: req.body.email },
      process.env.JWT_SECRET_KEY
    );

    const newUser = await User.create({
      fullname: req.body.fullname,
      email: req.body.email,
      password: hashedPassword,
      roleId: req.body.roleId,
      address: req.body.address,
      referralCode: referralCode,
      point: 0,
      status: true,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getUserData = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ error: "Missing authorization header" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    res.send(user);
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(400).send({ error: "Token expired" });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(400).send({ error: "Invalid token" });
    }
    res
      .status(500)
      .send({ error: "An error occurred while getting user data" });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllRole = async (req, res) => {
  try {
    const role = await Role.findAll();
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
