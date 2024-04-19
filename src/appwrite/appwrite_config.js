import { Client, Account, Databases, ID } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66215da5509c479c0f64');

export const account = new Account(client);

    // Initialize the Database service
export const database = new Databases(client);

export {ID};
export const DATABASE_ID = '6621e4600e1d7f7d75e6';
export const COLLECTION_ID = '6621e472b65345f67b9f';