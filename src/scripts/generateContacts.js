import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      newContacts.push(newContact);
    }

    const updateContacts = [...contacts, ...newContacts];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updateContacts, null, 2),
      'utf8',
    );
    console.log(`Успішно додано ${number} нових контактів.`);
  } catch (error) {
    console.error('Помилка в генеруванні контактів:', error);
    throw error;
  }
};

generateContacts(5);

export default generateContacts;
