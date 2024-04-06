import db from './db.js';

// Default Attendees Table:
// id: number
// firstname: string
// lastname: string
// linkedin: string
// role: string

db.run(
    "INSERT INTO attendees VALUES ('john', 'doe', 'https://www.linkedin.com/in/john-doe', 'frontend developer')"
);

db.serialize(() => {
    db.each('SELECT rowid AS id, * FROM attendees', (err, row) => {
        console.log('Users in database:');
        console.log(
            `${row.id}: ${row.firstname}, ${row.lastname}, ${row.linkedin}, ${row.role}`
        );
    });
});

export default db;
