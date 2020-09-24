/* eslint-disable no-undef */
const Passenger = require('./Passenger')
const Plane = require('./Plane')
const Bag = require('./Bag')

describe('Plane', function () {
  test('has a name', function () {
    const plane1 = new Plane({ name: 'AKA788' })
    expect(plane1.name).toEqual('AKA788')
  })

  test('has Passanger', () => {
    const plane1 = new Plane({ name: 'AKA788' })
    const person = new Passenger({ name: 'Sandor' })
    const handluggage = new Bag(8)
    const hullluggage = new Bag(25)
    person.addBag(handluggage)
    person.addBag(hullluggage)
    plane1.board(person)

    expect(plane1.passanger.length).toBe(1)
  })

  test('We can check the name of passanger', () => {
    const plane1 = new Plane({ name: 'AKA788' })
    const person = new Passenger({ name: 'Sandor' })
    const handluggage = new Bag(8)
    const hullluggage = new Bag(25)
    person.addBag(handluggage)
    person.addBag(hullluggage)
    plane1.board(person)

    expect(plane1.passanger[0].name).toEqual('Sandor')
  })
})
