import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "../modules/userSchema.js";
import asyncHandler from "express-async-handler";

//@desc       create new user
//@access     public
//method      POST
export const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, password, comfirmPassword, email } = req.body;

  if (!firstName && !lastName && !email && !password && !comfirmPassword) {
    return res.status(400).json({
      message: "please provide All contents",
    });
  }
  // Check if user exixt in the database

  const existsUser = await User.findOne({ email: req.body.email });
  if (existsUser) {
    return res.status(404).json({
      success: false,
      message: "Sorry the user is alread exist in the database!!",
    });
  }

  // try {
  //   const savedUser = await User.create({
  //     firstName,
  //     lastName,
  //     email,
  //     password,
  //   });
  //   if (!savedUser) {
  //     res.status(400).json({
  //       success: "failed",
  //       message: "Database refuse to save this user",
  //     });
  //   } else {
  //     res.status(200).json({
  //       success: "success",
  //       data: savedUser,
  //       message: "User Saved Successfully",
  //     });
  //   }
  // } catch (error) {
  //   return res.status(400);
  //   throw new Error("User Can't be created!!");
  // }
});

export const loginUser = asyncHandler(async (req, res) => {
  res.status(200).send("Hello login");
});
