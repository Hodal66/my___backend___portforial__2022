import Contacts from "../modules/contactModule.js";
import asyncHandler from "express-async-handler";
//discription         create contacts
///Methods            POST
//Routes             /api/v1/contacts

export const createContact = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  if (!req.body) {
    res.status(400).json({
      success: false,
      message: "Save message failed!!!",
    });
  }
  const savedMessage = await Contacts.create({
    name,
    email,
    message,
  });
  if (!savedMessage) {
    return res.status(400).json({
      success: false,
      message: "message can't be saved please try again!",
    });
  }
  return res.status(200).json({
    success: true,
    message: "Saved successfully",
  });
});

//discription         All contacts
///Methods            GET
//Routes             /api/v1/contacts

export const getAllContacts = asyncHandler(async (req, res) => {
  const result = await Contacts.find();
  if (result) {
    return res.status(200).json({
      message: result,
    });
  }
  res.status(200).json({
    message: "ALL CONTACT ARE successfully!!! RETRIEVED",
  });
});

//discription         get one Message contacts
///Methods            GET
//Routes             /api/v1/contacts/:id

export const getOneContact = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) return res.status(400).json({ message: "No id found" });
    const oneContact = await Contacts.findById(id);
    if (!oneContact) {
      return res.status(400).json({
        success: false,
        message: `No record associeted with ${id}`,
      });
    }
    return res.status(200).json({
      success: true,
      message: oneContact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server Error!",
    });
  }
};

//discription         create contacts
///Methods            POST
//Routes             /api/v1/contacts

export const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json([(message = "Please provide an Id")]);
    }

    const deletedMessage = await Contacts.findByIdAndDelete(id);
    if (deletedMessage) {
      res.status(200).json({
        message: "deleteContact successfully!!! deleted",
      });
    }
  } catch (error) {
    return res.status(400);
    throw new Error("You can't delete this record");
  }
});

//discription         create contacts
///Methods            POST
//Routes             /api/v1/contacts

export const updateContact = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const { name, email, message } = req.body;
  console.log(req.body);
  try {
  } catch (error) {
    return res.status(400);
    throw new Error("Can't be updated!!");
  }
});
