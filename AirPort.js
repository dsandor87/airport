const fs = require('fs')
// const { readFile } = require('fs/promises')

class AirPort {
  static airports = []
  name = ''
  planes = []

  constructor(name) {
    this.name = name
    this.constructor.airports.push(this)
  }
  addPlane(plane) {
    plane.setLocation(this.name)
    this.planes.push(plane)
  }

  takeOff(plane) {
    const index = this.planes.indexOf(plane)
    this.planes.splice(index, 1)
    const destinationAirport = AirPort.airports.find(
      (airport) => airport.name === plane.destination
    )
    destinationAirport.addPlane(plane)
  }

  getInfo() {
    return new Promise((resolve, reject) => {
      fs.readFile('./airports.json', (err, data) => {
        if (err) return reject(err)

        const airports = JSON.parse(String(data))
        const [airport] = Object.keys(airports)
          .filter((airportCode) => airports[airportCode].iata === this.name)
          .map((airportCode) => airports[airportCode])

        resolve(airport)
        console.log(airport)
      })
    })
  }

  getInfo(callback) {
    fs.readFile('./airports.json', (err, data) => {
      callback(err, JSON.parse(String(data)))
    })
  }
}

module.exports = AirPort
