const fetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
 
  /* will use jsonplaceholder.com service */

  baseUrl = 'https://jsonplaceholder.typicode.com/todos'

  console.log(baseUrl);
  
  const jsonData = await fetch(baseUrl, {duration: "1d", type: "json"});
  
  return jsonData
};