import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = [];

    if (data) {
      contacts = JSON.parse(data);
    }

    if (contacts.length >= 1) {
      contacts.pop();
      fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
      console.log('Останній контакт успішно видалений');
    } else {
      console.error('Масив контактів пустий.');
    }
  } catch (error) {
    console.error('Помилка при видаленні контактів:', error);
    throw error;
  }
};

removeLastContact();
