const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create New Contact
//@route POST /api/contacts
//@access public
//status 201 as resource is created
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);

  const { name, email, phone } = req.body;
  if (!name || !email | !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const contact = await Contact.create({ name, email, phone });
  res.status(201).json(contact);
});

//@desc Get Contact
//@route GET /api/contacts/:id
//@access public
//status 201 as resource is created
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error(`No client with the id of ${req.params.id} was found'`);
  }

  res.status(200).json(contact);
});

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access public
//status 201 as resource is created
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error(`No client with the id of ${req.params.id} was found'`);
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});

//@desc Delete Contact
//@route DELETE /api/contacts/:id
//@access public
//status 201 as resource is created
const deleteContact = asyncHandler(async (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(404);
    throw new Error(`No client with the id of ${req.params.id} was found'`);
  }

  await Contact.findByIdAndDelete(id);
  res.status(200).json(id);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
