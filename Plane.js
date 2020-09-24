class Plane {
  constructor({ name, airport }) {
    this.name = name
    this.destination = airport
    this.bags = []
    this.passanger = []
  }
  board(passanger) {
    this.passanger.push(passanger)
  }
}

module.exports = Plane
