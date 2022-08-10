import Contacts from "../modules/contactModule";

const createContact = async (req, res) => {
  res.status(200).json({
    message: "Message created successfully!!!",
  });
};
export default createContact;
