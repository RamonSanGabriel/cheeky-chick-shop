import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

export const contactsPath = path.join('models', 'mockData.json');

const listAllContacts = async () => {
  try {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
  } catch (error) {
    console.error('Error reading message', error.message);
  }
};

export { listAllContacts };
