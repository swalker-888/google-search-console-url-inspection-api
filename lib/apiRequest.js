const axios = require("axios");

const apiRequests = async (domain, urls, token) => {
  return await Promise.all(
    urls.map(async (url) => {
      return await axios({
        method: "post",
        url: "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          inspectionUrl: url,
          siteUrl: domain,
          languageCode: "en-GB",
        },
      });
    })
  );
};

module.exports = apiRequests;
