// const fs = require("fs");
// const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {

  // eleventyConfig.addPlugin(pluginRss);

  // Allow data cascading instead of replacing. Mainly for post tags.
  eleventyConfig.setDataDeepMerge(true);


  // Folders to copy into output.
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("**/*.pdf");
};