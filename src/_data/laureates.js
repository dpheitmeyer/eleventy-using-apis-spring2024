const eleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  /* The Nobel Prize API
     https://www.nobelprize.org/about/developer-zone-2/  */

    const baseUrl = 'https://api.nobelprize.org/2.1/laureates';
    const options = {method: 'GET', "accept" : "application/json"};
    const cacheDuration = "1d";
    let requestParams = {
        sort: "asc",
        limit: 100,
        offset: 0
      }

  try {

    let allLaureates = {"laureates": []}
    let i = 0;
    let laureateCount = 0;
    let areWeDoneWithLaureates = false;
    do {

        let params = new URLSearchParams(requestParams);
        let queryString = params.toString();
        let requestUrl = `${baseUrl}?${queryString}`;
        console.log(requestUrl);
    
        const data = await eleventyFetch(requestUrl, {
            fetchOptions : options,
            duration: cacheDuration,
            type: "json"
        });
        allLaureates["laureates"].push(...data.laureates);
        requestParams.offset += requestParams.limit;
        laureateCount = data.meta.count
        if (data.links.self === data.links.last) {
            areWeDoneWithLaureates = true;
        }
    //} while (requestParams.offset < laureateCount  );
    } while (areWeDoneWithLaureates === false)

 
    return allLaureates;
    } catch (error) {
    console.error(error);
    }

};
