import express from 'express';
import { listAllContacts } from '../../models/mockData.js';
import bodyParser from 'body-parser';
import { nanoid } from 'nanoid';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const contacts = await listAllContacts();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
});
router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    console.log(contactId);

    const contact = mockData.find(
      (contact) => contact.id === parseInt(contactId)
    );

    if (!contact) {
      res.status(404).json({ message: 'Contact not found' });
    } else {
      res.json(contact);
    }
  } catch (error) {
    next(error);
  }
  ``;
});
router.post('/', bodyParser.json(), async (req, res, next) => {
  try {
    const { username, email } = req.body;

    const newContact = { id: nanoid(), username, email };
    listAllContacts.push(newContact);

    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
});
export { router };
