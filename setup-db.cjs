const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('vms.db');

db.serialize(function() {
  db.run('CREATE TABLE IF NOT EXISTS vendors (id INTEGER PRIMARY KEY, name TEXT, email TEXT, phone TEXT, address TEXT, createdAt DATETIME, updatedAt DATETIME)');
  db.run('CREATE TABLE IF NOT EXISTS contracts (id INTEGER PRIMARY KEY, vendorId INTEGER, details TEXT, startDate DATETIME, endDate DATETIME, createdAt DATETIME, updatedAt DATETIME)');
  db.run('CREATE TABLE IF NOT EXISTS invoices (id INTEGER PRIMARY KEY, contractId INTEGER, amount REAL, dueDate DATETIME, status TEXT, createdAt DATETIME, updatedAt DATETIME)');
  db.run('CREATE TABLE IF NOT EXISTS announcements (id INTEGER PRIMARY KEY, title TEXT, content TEXT, createdAt DATETIME, updatedAt DATETIME)');
});

db.close();
