const path = require('path')                                        // used to set file path
const HtmlWebpackPlugin = require('html-webpack-plugin')            // automatically generates index.html with index_bundle.js in 'dist' folder

module.exports = {                                      
    entry: './src/index.tsx',                            
    output: {                                           
        path: path.join(__dirname, '/dist'),            //__dirname : current dir, dist: complied files in a single bundle
        filename: 'index_bundle.js'
    },
    module: {                                           // load babel-loader for all .js files except that in node_modules
        rules: [
            {
                test: /\.tsx?$/, 
                use: 'ts-loader',
                exclude: /node_modules/ 
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(js|ts)$/,                          
                exclude: /node_module/,                 
                use: 'babel-loader',		
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
          'react-native$': 'react-native-web'           // load reate-native-web instead of react-native
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'                // template to generate
        })
    ]
}