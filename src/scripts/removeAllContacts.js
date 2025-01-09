import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = [];

    if (data) {
      contacts = JSON.parse(data);
    }

    if (Array.isArray(contacts)) {
      contacts = [];

      fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
      console.log('Усі контакти успішно видалені');
    } else {
      console.error('Формат даних у файлі некоректний.');
    }
  } catch (error) {
    console.error('Помилка при видаленні контактів:', error);
    throw error;
  }
};

removeAllContacts();
