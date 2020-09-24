class Plane {
  constructor({ name }) {
    this.name = name
    this.destination = undefined
    this.location = undefined
    this.bags = []
    this.passanger = []
  }
  board(passanger) {
    this.passanger.push(passanger)
  }
  setDestination(destination) {
    this.destination = destination
  }
  setLocation(location) {
    this.location = location
  }
}

module.exports = Plane
