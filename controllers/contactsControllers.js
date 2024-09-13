import { Contact } from "../models/contactsModel.js";
import { contactValidation, favoriteValidation } from "../validations/validation";
import { httpError } from "../helpers/httpErrors.js";

const getAllContacts = async (_req, res) => {
    const result = await Contact.find();
    res.json(result);
};

const getContactById = async (_req, res) => {
    const { ContactId } = req.params;
    const result = await Contact.findById(contactId);

    if (!result) {
        throw httpError(404, "Contact ID Not Found")
    }

    res.json(result);
};

const addCOntact = async (req, res) => {
    const { error } = contactValidation.validate(req.body);

    if (error) {
        throw httpError(400, "missing required name field");
    }

    const result = await Contact.create(req.body);

    res.status(201).json(result);
};


