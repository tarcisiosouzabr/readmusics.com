const { User } = require("../../../../models");

export default async function user(request, response) {
  const jane = await User.create({
    firstName: "First Test Name",
    lastName: "Last Test Name",
    email: "testuser@test.com",
  });
  // const testUser = await models.create({
  //   firstName: "First Test Name",
  //   lastName: "Last Test Name",
  //   email: "testuser@test.com",
  // });

  response.status(200).json();
}
