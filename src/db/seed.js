const { db } = require('@vercel/postgres');

const { ItemData } = require('./data.js');

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
      ItemData.map(
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

async function main() {
  const client = await db.connect();

  await seedItems(client);

  await client.end();
}

main().catch((error) => {
  console.error('DBのseedに失敗しました', error);
});
