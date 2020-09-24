class Plane {
  constructor({ name }) {
    this.name = name
    this.destination = undefined
    this.bags = []
    this.passanger = []
  }
  board(passanger) {
    this.passanger.push(passanger)
  }
}

module.exports = Plane
