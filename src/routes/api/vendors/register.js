import sqlite3 from 'sqlite3';
import { json } from '@sveltejs/kit';

// Open the SQLite database
const db = new sqlite3.Database('vms.db');

// POST request handler for vendor registration
export async function POST({ request }) {
    try {
        const { name, email, phone, address } = await request.json();

        // Insert the new vendor into the database
        db.run(
            `INSERT INTO vendors (name, email, phone, address) VALUES (?, ?, ?, ?)`,
            [name, email, phone, address],
            function (err) {
                if (err) {
                    throw new Error('Failed to register vendor');
                }
            }
        );

        return json({ message: 'Vendor registered successfully' }, { status: 201 });
    } catch (error) {
        return json({ error: error.message }, { status: 500 });
    }
}
