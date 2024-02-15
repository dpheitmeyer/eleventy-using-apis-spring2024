module.exports = function(eleventyConfig) {
	const inspect = require("util").inspect;
    eleventyConfig.addPassthroughCopy("src/assets/**");
	eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);
	return {
    	"dir" : {
        	"input": "src",
        	"output": "dist"
    	}
	};
};
