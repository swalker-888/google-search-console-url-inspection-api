const fs = require("fs");
const apiRequests = require("./lib/apiRequest");
const auth = require("./lib/auth");

const urlInspection = async (domain) => {
  const token = await auth();
  const urls = fs.readFileSync("urls.txt").toString().split("\n");

  apiRequests(domain, urls, token)
    .then((values) => {
      for (const value of values) {
        console.log(value.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const domain = "https://www.journeyfurther.com/";

urlInspection(domain);
