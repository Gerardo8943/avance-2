const admin = require('firebase-admin');
const serviceAccount = require('./viajes-gz-73055-firebase-adminsdk-eusou-55b6e0012e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = { db };