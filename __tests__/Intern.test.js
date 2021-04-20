const Intern = require('../lib/Intern')


test('get school name', () => {
    const testValue = 'school'
    const event = new Intern ('bob', 1, 'bob@me.com', testValue)

    expect(event.getSchool()).toBe(testValue)
})

test('checks for role', () => {
    const testValue = 'Intern'
    const event = new Intern ('bob', 1, 'bob@bob.com', 'school')

    expect(event.getRole()).toBe(testValue)

})