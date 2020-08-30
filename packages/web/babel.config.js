module.exports = function(api) {
    api.cache(true);
    return {
      presets: [
          "@babel/preset-react",
          "@babel/preset-env"
        ],
      plugins: [
        ["@babel/plugin-proposal-decorators", { "legacy": true}],
        ["@babel/plugin-proposal-class-properties", { "loose": true}],
        ["module-resolver", {
          "alias": {
            "^react-native$": "react-native-web"
          }
        }]
      ]
    };
  };
  