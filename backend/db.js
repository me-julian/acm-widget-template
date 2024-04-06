import sqlite3 from 'sqlite3';
const db = new sqlite3.Database(':memory:');

// DO NOT CHANGE

db.serialize(() => {
    db.run(
        'CREATE TABLE IF NOT EXISTS attendees ([firstname] TEXT, [lastname] TEXT, [linkedin] TEXT, [role] TEXT)'
    );
    const stmt = db.prepare('INSERT INTO attendees VALUES (?, ?, ?, ?)');

    let attendees = [
        [
            'julian',
            'edwards',
            'https://www.linkedin.com/in/julian-edwards/',
            'full-stack web developer',
        ],
    ];
    for (let attendee of attendees) {
        stmt.run(attendee);
    }

    stmt.finalize();
});

export default db;
