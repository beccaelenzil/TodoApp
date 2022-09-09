const admin = require('firebase-admin');

admin.initializeApp();

const firestore_db = admin.firestore();


module.exports = { admin, firestore_db };