import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.promises.writeFile(PATH_DB, data, 'utf8');
    console.log('Дані успішно записано до файлу.');
  } catch (error) {
    console.error('Помилка при записі файлу:', error);
    throw error;
  }
};
