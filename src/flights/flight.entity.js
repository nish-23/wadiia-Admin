const Sequelize = require('sequelize');

const FlightModel = require('../models/flightBooking');


const sequelize = new Sequelize('flightlist', 'root', 'Nish@2307', {
    host: 'localhost',
    dialect: 'mysql',
  });
  const check = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
  check();

  const Flight = FlightModel(sequelize, Sequelize);

//   sequelize.sync()
// .then(() => {
//     console.log();
// });
sequelize.query("SELECT * from flightlists").then((err, result) => {
    if(err){
        console.log(err)
    }
    else{
        res.send(result)
    }
})

// sequelize.query(
//   "INSERT INTO flightlists (flightname, departure, arrival, duration, price) VALUES(flightname, departure, arrival, duration, price)",
//   (err, result) => {
//       if(err) {
//           console.log(err);
//       } else {
//           res.send(result);
//       }
//   }
// )

module.exports = Flight;