import Contacts from "../modules/contactModule.js";
const createContact = async (req, res) => {
  console.log("Inside contact");
  res.status(200).json({
    message: "Message created successfully!!!",
  });
};
export default createContact;
