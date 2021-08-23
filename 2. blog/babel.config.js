const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        debug: true,
        corejs: 3,
        targets: "> 0.2%, not dead"
      }
    ]
  ];
  
  module.exports = { presets };
