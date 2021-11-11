const fs = require("fs");
const client = require("../../client.js");
const bcrpyt = require("bcrypt");
const { protectedResolver } = require("../users.utils");

const resolverFn = async (
  _,
  { firstName, lastName, userName, email, password: newPassword, bio, avatar },
  { loggedInUser }
) => {
  let avatarUrl = null;
  if (avatar) {
    const { filename, createReadStream } = await avatar;
    const newFilename = `${loggedInUser.id}-${Date.now()}-${filename}`;
    const readStream = createReadStream();
    const writeStream = fs.createWriteStream(
      process.cwd() + "/uploads/" + newFilename
    );
    readStream.pipe(writeStream);
    avatarUrl = `http://localhost:4000/static/${newFilename}`;
    avatar = avatarUrl;
  } else {
    avatar = undefined;
  }

  let uglyPassword = null;
  if (newPassword) {
    uglyPassword = await bcrpyt.hash(newPassword, 10);
    password = uglyPassword;
  } else {
    password = undefined;
  }

  const updatedUser = await client.user.update({
    where: { id: loggedInUser.id },
    data: {
      firstName,
      lastName,
      userName,
      email,
      password,
      bio,
      avatar
    }
  });
  if (updatedUser.id) {
    return {
      ok: true
    };
  } else {
    return {
      ok: false,
      error: "Could not update profile."
    };
  }
};

module.exports = {
  Mutation: {
    editProfile: protectedResolver(resolverFn)
  }
};
