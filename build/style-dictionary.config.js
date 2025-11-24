export default {
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      transforms: ['br/name/path'],
      buildPath: "css/",
      files: [
        {
          destination: "brand.css",
          format: "br/css",
        },
      ],
    },
    ts: {
      transforms: ['br/name/path'],
      buildPath: "src/",
      files: [
        {
          destination: "tokens.ts",
          format: "br/ts",
        },
      ],
    },
  },
};
