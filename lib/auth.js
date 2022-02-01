const { authenticate } = require("@google-cloud/local-auth");
const path = require("path");

const auth = async () => {
  const googleAuth = await authenticate({
    keyfilePath: path.join(__dirname, "../oauth2.keys.json"),
    scopes: [
      "https://www.googleapis.com/auth/webmasters",
      "https://www.googleapis.com/auth/webmasters.readonly",
    ],
  });

  const token = googleAuth.credentials.access_token;
  return token;
};

module.exports = auth;
