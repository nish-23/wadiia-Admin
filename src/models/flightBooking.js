module.exports = (sequelize, type) => {
    return sequelize.define('flightlist', {
        flightname: type.STRING,
        departure: type.TIME,
        arrival: type.TIME,
        duration: type.INTEGER,
        price: type.INTEGER
    })
}