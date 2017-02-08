module.exports={
    entry:"./kmtest/index.js",
    output:{
        path:"./kmtest/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "tpl" },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.css$/, loader: 'style!css' },
            {test: /\.(gif|png|jpg|eot|woff|woff2|ttf|svg)$/, loader: 'url-loader?limit=81920000'},
        ]
    }
}