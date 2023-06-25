//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get All Contacts" });
};

//@desc Create New Contact
//@route POST /api/contacts
//@access public
//status 201 as resource is created
const createContact = (req, res) => {
  console.log("The request body is :", req.body);

  const { name, email, phone } = req.body;
  if (!name || !email | !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  res.status(201).json({ message: "Create Contact" });
};

//@desc Get Contact
//@route GET /api/contacts/:id
//@access public
//status 201 as resource is created
const getContact = (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
};

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access public
//status 201 as resource is created
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
};

//@desc Delete Contact
//@route DELETE /api/contacts/:id
//@access public
//status 201 as resource is created
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
