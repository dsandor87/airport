class AirPort {
  static airports = []

  constructor(name) {
    this.name = name
    this.planes = []
    this.constructor.airports.push(this)
  }
  addPlane(plane) {
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
}

module.exports = AirPort
