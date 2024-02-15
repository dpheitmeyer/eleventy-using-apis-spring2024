const eleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  /* The Nobel Prize API
     https://www.nobelprize.org/about/developer-zone-2/  */

  let baseUrl = "https://api.nobelprize.org/2.1/nobelPrizes";
  /*
  sort
  limit
  nobelPrizeYear (end year)
  yearTo (start year)
  */
  let requestParams = {
    sort: "desc",
    limit: 1000,
    offset: 0,
    nobelPrizeYear: 2023,
    yearTo: 2010
  }

  let params = new URLSearchParams(requestParams);
  let queryString = params.toString();
  console.log(queryString);
  let requestUrl = `${baseUrl}?${queryString}`;

  console.log(requestUrl);
  try {
    let prizesData = await eleventyFetch(requestUrl, {
      duration: "1d",
      type: "json"
    });
    return(prizesData);
  } catch (err) {
    console.error("Something went wrong with request\n" + requestUrl);
    console.log(err);
  }
};
