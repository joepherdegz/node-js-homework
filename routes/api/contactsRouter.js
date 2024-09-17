import express from 'express';
import { addContact, deleteContactById, getAllContacts, getContactById, updateContactById, updateStatusContact } from "../../controllers/contactsControllers.js";
import { controlWrapper } from "../../helpers/controlWrapper.js";

const router = express.Router()

router.get('/',  controlWrapper(getAllContacts));

router.get('/:contactId', controlWrapper(getContactById));

router.post('/', controlWrapper(addContact));

router.delete('/:contactId',  controlWrapper(deleteContactById));

router.put('/:contactId', controlWrapper(updateContactById));

router.patch("/:contactId/favorite", controlWrapper(updateStatusContact));

export { router };
