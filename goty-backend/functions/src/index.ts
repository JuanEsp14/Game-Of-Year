import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express'
import * as cors from 'cors';

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://goty-78579.firebaseio.com"
});

const db = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest( (request, response) => {
  response.json({
      mensaje: 'Hola Mundo desde funciones de Firebase!'
    });
});

export const getGOTY = functions.https.onRequest(async(request, response) => {

  //const nombre = request.query.nombre || 'Sin Nombre';
  //response.json({nombre})

  const gotyRef = db.collection('goty');
  const docsSnap = await gotyRef.get();
  const juegos = docsSnap.docs.map( doc => doc.data());

  response.json( juegos );
});

/**Servidor Express */
const app = express();
app.use( cors({ origin: true }) );

//Esta función es la misma que getGOTY pero creada desde un servidor de NODE
app.get('/goty',async ( req, resp) => {
  const gotyRef = db.collection('goty');
  const docsSnap = await gotyRef.get();
  const juegos = docsSnap.docs.map( doc => doc.data());

  resp.json( juegos );
});

//Se le indica a firebase que hay un servidor express corriendo
export const api = functions.https.onRequest( app );