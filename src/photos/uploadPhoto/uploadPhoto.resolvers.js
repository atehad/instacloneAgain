const client = require("../../client");
const { protectedResolver } = require("../../users/users.utils");

const uploadFn = async (_, { file, caption }, { loggedInUser }) => {
  let hashtagObj = [];
  if (caption) {
    const hashtags = caption.match(/#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/g);
    hashtagObj = hashtags.map((hashtag) => ({
      where: { hashtag },
      create: { hashtag }
    }));
    console.log(hashtagObj);
  }

  return client.photo.create({
    data: {
      file,
      caption,
      user: {
        connect: {
          id: loggedInUser.id
        }
      },
      ...(hashtagObj.length > 0 && {
        hashtags: { connectOrCreate: hashtagObj }
      })
    }
  });

  // save the photo WITH the parsed hashtags
  // add the photo to the hashtags
};

module.exports = {
  Mutation: {
    uploadPhoto: protectedResolver(uploadFn)
  }
};
