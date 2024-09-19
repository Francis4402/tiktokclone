import { Account, Client, Databases, Storage, Query, ID } from 'appwrite';


const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL as string)
    .setProject(process.env.NEXT_PUBLIC_ENDPOINT as string);

    const account = new Account(client);
    const database = new Databases(client);
    const storage = new Storage(client);

export { client, account, database, storage, Query, ID }