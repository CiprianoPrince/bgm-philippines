// import { faker } from "@faker-js/faker"

// const createUser = () => ({
//   id: faker.string.uuid(),
//   name: faker.internet.userName(),
//   email: faker.internet.email(),
//   address: faker.location.country(),
// })

// const createUsers = (numUsers = 5) => {
//   return new Array(numUsers).fill(undefined).map(createUser)
// }

// const fakeUsers = createUsers(2000)

const fetchFakeUsers = () => JSON.parse(localStorage.getItem("faker"))

export default fetchFakeUsers
