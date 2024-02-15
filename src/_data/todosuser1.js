const fetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
 
  /* will use jsonplaceholder.com service */

  const baseUrl = 'https://jsonplaceholder.typicode.com/todos'
  const userId = 1;
  let requestUrl = `${baseUrl}?userId=${userId}`;
  console.log(requestUrl);

  const jsonData = await fetch(requestUrl, {duration: "1d", type: "json"});
    
  return jsonData
};

/* another way of doing the URL query string 
  let requestParams = { "userId": 1};
  let urlParamsObj = new URLSearchParams(requestParams);
  let queryString = urlParamsObj.toString();
  console.log(queryString);
  let requestUrl = `${baseUrl}?${queryString}`
*/