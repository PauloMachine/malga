const babelConfig = {
  presets: [
    ["@babel/preset-env", { targets: "defaults" }],
    ["@babel/preset-react", { runtime: "automatic" }],
    ["@babel/preset-typescript"],
  ],
  plugins: ["@babel/plugin-syntax-jsx"],
};

export default babelConfig;
