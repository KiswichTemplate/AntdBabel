const CracoAntDesignPlugin = require("craco-antd");

const {getLoaders, loaderByName} = require("@craco/craco");
const rewireBabelLoader = require("craco-babel-loader");

module.exports = {
    babel: {
        plugins: ["@babel/plugin-proposal-optional-chaining",
            ["@babel/plugin-proposal-decorators", {"legacy": true}]],
    },
    plugins: [
        {plugin: CracoAntDesignPlugin},
    ]
};
