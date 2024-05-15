/* eslint-disable-next-line */
const { db } = require('@vercel/postgres');
/* eslint-disable-next-line */
const bcrypt = require('bcrypt');
/* eslint-disable-next-line */
const { itemData, userData } = require('./data.js');

async function seedItems(client) {
  try {
    await client.sql`DROP TABLE items;`;

    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS items (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price INT NOT NULL,
        description VARCHAR(2000) NOT NULL,
        image_src VARCHAR(2000) NOT NULL,
        image_alt VARCHAR(100) NOT NULL
      );
    `;

    const insertedItems = await Promise.all(
      itemData.map(
        (item) => client.sql`
          INSERT INTO items (name, price, description, image_src, image_alt)
          VALUES (${item.name}, ${item.price}, ${item.description}, ${item.image.src}, ${item.image.alt})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    return {
      createTable,
      items: insertedItems
    };
  } catch (error) {
    console.error('itemsのseedに失敗しました', error);
    throw error;
  }
}

async function seedUsers(client) {
  try {
    await client.sql`DROP TABLE users;`;

    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        postal_code VARCHAR(7) NOT NULL,
        address VARCHAR(100) NOT NULL,
        phone_number VARCHAR(11) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL
      );
    `;

    const insertedUsers = await Promise.all(
      userData.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);

        return client.sql`
          INSERT INTO users (name, postal_code, address, phone_number, email, password)
          VALUES (${user.name}, ${user.postalCode}, ${user.address}, ${user.phoneNumber}, ${user.email}, ${hashedPassword})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    return {
      createTable,
      users: insertedUsers
    };
  } catch (error) {
    console.error('usersのseedに失敗しました', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedItems(client);

  await seedUsers(client);

  await client.end();
}

main().catch((error) => {
  console.error('DBのseedに失敗しました', error);
});
