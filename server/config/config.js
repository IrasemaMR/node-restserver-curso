// =================
// Puerto
// =================
process.env.PORT = process.env.PORT = 3000

// =================
// Entorno
// =================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// =================
// Vencimiento del token
// =================
// 60 segundos * 60 minutos * 24 horas * 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30

// =================
// Entorno
// =================
process.env.SEED = process.env.SEED || 'ste-es-el-seed-desarrollo'

// =================
// Base de datos
// =================
let urlDB

// if (process.env.NODE_ENV === 'dev') {
// urlDB = 'mongodb://localhost:27017/cafe'
// } else {
urlDB = 'mongodb+srv://irasema:Imr955722659*@cluster0-v9rla.mongodb.net/cafe'

//urlDB = 'mongodb://cafe-user:admin123456@ds135876.mlab.com:35876/irasema-cafe'
//urlDB = process.env.MONGO_URI
// }

process.env.URLDB = urlDB

// =================
// Google Client ID
// =================
process.env.CLIENT_ID = process.env.CLIENT_ID || '753511455011-27o5jgevokk1ep96ehdpjoo3fa4cm8t5.apps.googleusercontent.com'