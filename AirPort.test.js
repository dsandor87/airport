/* eslint-disable no-undef */
const Airport = require('./Airport')
const Passenger = require('./Passenger')
const Plane = require('./Plane')
const Bag = require('./Bag')

describe('Airport', function () {
  test('has a name', function () {
    const airport1 = new Airport('Miami')
    expect(airport1.name).toEqual('Miami')
  })

  test('has Planes', () => {
    const airport1 = new Airport('Miami')
    const plane1 = new Plane({ name: 'AKA788' })
    const person = new Passenger({ name: 'Sandor' })
    const handluggage = new Bag(8)
    const hullluggage = new Bag(25)
    person.addBag(handluggage)
    person.addBag(hullluggage)
    plane1.board(person)
    airport1.addPlanes(plane1)
    const plane2 = new Plane({ name: 'AKA784' })
    const person2 = new Passenger({ name: 'Sandor' })
    const handluggage2 = new Bag(8)
    const hullluggage2 = new Bag(25)
    person.addBag(handluggage2)
    person.addBag(hullluggage2)
    plane1.board(person2)
    airport1.addPlanes(plane2)
    expect(airport1.planes.length).toBe(2)
  })

  test('we can read the name of the plane', () => {
    const airport1 = new Airport('Miami')
    const plane1 = new Plane({ name: 'AKA788' })
    airport1.addPlanes(plane1)

    expect(airport1.planes[0].name).toEqual('AKA788')
  })
  test('we can check the passanger name on specific plane', () => {
    const airport1 = new Airport('Miami')
    const plane1 = new Plane({ name: 'AKA788' })
    const person = new Passenger({ name: 'Sandor' })
    const handluggage = new Bag(8)
    const hullluggage = new Bag(25)
    person.addBag(handluggage)
    person.addBag(hullluggage)
    plane1.board(person)
    airport1.addPlanes(plane1)
    const plane2 = new Plane({ name: 'AKA784' })
    const person2 = new Passenger({ name: 'Sandor' })
    const handluggage2 = new Bag(8)
    const hullluggage2 = new Bag(25)
    person.addBag(handluggage2)
    person.addBag(hullluggage2)
    plane1.board(person2)
    airport1.addPlanes(plane2)
    expect(airport1.planes.length).toBe(2)
  })
})