import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const readContacts = async () => {
  try {
    const contacts = await fs.promises.readFile(PATH_DB, 'utf8');
    console.log(contacts);
    return JSON.parse(contacts);
  } catch (error) {
    console.error('Помилка при зчитуванні файлу:', error);
    throw error;
  }
};
