const Manager = require('../lib/Manager')


test('get manager office number', () => {
    const testValue = '23'
    const event = new Manager ('bob', 1, 'bob@me.com', testValue)

    expect(event.getOffice()).toBe(testValue)
})

test('checks for role', () => {
    const testValue = 'Manager'
    const event = new Manager ('bob', 1, 'bob@bob.com', '23')

    expect(event.getRole()).toBe(testValue)

})