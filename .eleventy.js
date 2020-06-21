// const fs = require("fs");
// const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {

  // eleventyConfig.addPlugin(pluginRss);

  // Allow data cascading instead of replacing. Mainly for post tags.
  eleventyConfig.setDataDeepMerge(true);


  // Folders to copy into output.
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("*.css");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("*/*.pdf");


  const pluginTOC = require('eleventy-plugin-nesting-toc');
  eleventyConfig.addPlugin(pluginTOC, {tags: ['h2','h3']});

  const markdownIt = require('markdown-it');
  const markdownItAnchor = require('markdown-it-anchor');
  eleventyConfig.setLibrary("md",
      markdownIt({
          html: true,
          linkify: true,
          typographer: true,
      }).use(markdownItAnchor, {})
  );

  // Color syntax highlight
  // const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
  // module.exports = function(eleventyConfig) {
  //   eleventyConfig.addPlugin(syntaxHighlight);
  // };

};