/* eslint-disable no-undef */
const Airport = require('./Airport')
const Passenger = require('./Passenger')
const Plane = require('./Plane')
const Bag = require('./Bag')

describe('Airport', function () {
  test('has a name', () => {
    const LHR = new Airport('LHR')
    expect(LHR.name).toBe('LHR')
  })

  test('each airport knows about all the others', () => {
    expect(Airport.airports.length).toBe(1)
    const LAX = new Airport('LAX')
    const BUD = new Airport('BUD')

    expect(Airport.airports).toBeTruthy()
    expect(Airport.airports.length).toBe(3)
  })

  test('an Airport has planes', () => {
    const plane1 = new Plane('flyrider')
    const [LHR, LAX] = Airport.airports
    LHR.addPlane(plane1)
    expect(plane1.location).toEqual('LHR')
    plane1.setDestination('LAX')
    LHR.takeOff(plane1)
    expect(LHR.planes.length).toBe(0)
    expect(LAX.planes.length).toBe(1)
  })

  // -----------
  test('has a name', function () {
    const airport1 = new Airport('Miami')
    expect(airport1.name).toEqual('Miami')
  })

  test('has Planes', () => {
    const airport1 = new Airport('Miami')
    const plane1 = new Plane({ name: 'AKA788' }, airport1)
    const person = new Passenger({ name: 'Sandor' })
    const handluggage = new Bag(8)
    const hullluggage = new Bag(25)
    person.addBag(handluggage)
    person.addBag(hullluggage)
    plane1.board(person)
    airport1.addPlane(plane1)
    const plane2 = new Plane({ name: 'AKA784' })
    const person2 = new Passenger({ name: 'Sandor' })
    const handluggage2 = new Bag(8)
    const hullluggage2 = new Bag(25)
    person.addBag(handluggage2)
    person.addBag(hullluggage2)
    plane1.board(person2)
    airport1.addPlane(plane2)
    expect(airport1.planes.length).toBe(2)
  })

  test('we can read the name of the plane', () => {
    const airport1 = new Airport('Miami')
    const plane1 = new Plane({ name: 'AKA788' })
    airport1.addPlane(plane1)

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
    airport1.addPlane(plane1)
    const plane2 = new Plane({ name: 'AKA784' })
    const person2 = new Passenger({ name: 'Sandor' })
    const handluggage2 = new Bag(8)
    const hullluggage2 = new Bag(25)
    person.addBag(handluggage2)
    person.addBag(hullluggage2)
    plane1.board(person2)
    airport1.addPlane(plane2)
    expect(airport1.planes[0].passanger[0].name).toEqual('Sandor')
  })
  test('we can check the passanger bags on specific plane', () => {
    const airport1 = new Airport('Miami')
    const plane1 = new Plane({ name: 'AKA788' })
    const person = new Passenger({ name: 'Sandor' })
    const handluggage = new Bag(8)
    const hullluggage = new Bag(25)
    person.addBag(handluggage)
    person.addBag(hullluggage)
    plane1.board(person)
    airport1.addPlane(plane1)
    const plane2 = new Plane({ name: 'AKA784' })
    const person2 = new Passenger({ name: 'Sandor' })
    const handluggage2 = new Bag(8)
    const hullluggage2 = new Bag(25)
    person2.addBag(handluggage2)
    person2.addBag(hullluggage2)
    plane2.board(person2)
    airport1.addPlane(plane2)
    expect(airport1.planes[0].passanger[0].bags.length).toBe(2)
  })
  // Callback

  test('airports have a city', (done) => {
    const CDG = new Airport('CDG')
    CDG.getInfo((err, info) => {
      console.log(info)
      expect(err).toBeNull()
      expect(info.country).toEqual('FR')
      done()
    })
  })

  // Promise

  test('airports have a city', () => {
    const CDG = new Airport('CDG')
    return CDG.getInfo()
      .then((info) => {
        expect(info.city).toEqual('Paris')
      })
      .catch((err) => {
        expect(err).toBeNull()
      })
  })

  // Await

  test('can get information like the city from an airport instance', async () => {
    const CDG = new Airport('CDG')
    const airport = await CDG.getInfo()
    expect(airport.city).toEqual('Paris')
  })
})
