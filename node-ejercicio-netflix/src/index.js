const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});


// const fakeMovies = [
//   {
//     id: 1,
//     title: "Wonder Woman",
//     genre: "Action",
//     image:
//       "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/12/gal-gadot-como-wonder-woman-universo-extendido-dc-2895594.jpg?tf=3840x",
//     category: "Superhero",
//     year: 2017,
//     director: "Patty Jenkins",
//   },
//   {
//     id: 2,
//     title: "Inception",
//     genre: "Science Fiction",
//     image:
//       "https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg",
//     category: "Thriller",
//     year: 2010,
//     director: "Christopher Nolan",
//   },
// ];

//Conexión con MySQL

async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    database: 'netflix',
    user: 'root',
    password: '1234',
  });
  await connection.connect();

  return connection;
};


//endpoint
server.get('/movies', async (req, res) => {

  let sql = 'SELECT * FROM movies';

  const connection = await getConnection();
  const [results] = await connection.query(sql);
  res.json({
    success: true,
    movies:  results
  });
  connection.end();
});

//Servidor estático unir front con back
const staticServerWeb = "./src/public-react";
server.use(express.static(staticServerWeb));

//Servidor estático para imágenes
const staticServerImages = "./src/public-movies-images/";
server.use(express.static(staticServerImages));


// server.get("/movies", function (req, res) {
//   res.json({
//     success: true,
//     movies:  fakeMovies
//   });

// });

