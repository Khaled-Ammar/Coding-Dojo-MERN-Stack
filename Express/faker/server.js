// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createUser = () => {
    const newFake = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        id:faker.datatype.uuid(),
        email:faker.internet.email(),
        password:faker.internet.password()


    };
    return newFake;
};
const createRandomCompany = () => {
  // console.log(faker.person)
    const newFake = {
      compId: faker.datatype.uuid(),
      companyName: faker.company.name(),
      Address: [{"street":faker.address.street(),"city":faker.address.city(),"state":faker.address.state(),"zipcode":faker.address.zipCode(),"country":faker.address.country()}]
    };
    return newFake;
};
app.get("/api/users", (req, res) => {
  res.json(createUser());
});
app.get("/api/company", (req, res) => {
  res.json(createRandomCompany());
});

app.get("/api/user/company", (req, res) => {
  const user=createUser();
  const company = createRandomCompany();
  const new1 = {user,company}
  res.json(new1);
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */
