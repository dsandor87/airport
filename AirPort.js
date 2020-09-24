class AirPort {
  constructor(name) {
    this.name = name
    this.planes = []
  }
  addPlanes(plane) {
    this.planes.push(plane)
  }
}

module.exports = AirPort
