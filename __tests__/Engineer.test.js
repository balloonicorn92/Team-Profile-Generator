const Engineer = require('../lib/Engineer')


test('get engineer github', () => {
    const testValue = 'githubUser'
    const event = new Engineer ('bob', 1, 'bob@me.com', testValue)

    expect(event.getGithub()).toBe(testValue)
})

test('checks for role', () => {
    const testValue = 'Engineer'
    const event = new Engineer ('bob', 1, 'bob@bob.com', 'githubUser')

    expect(event.getRole()).toBe(testValue)

})