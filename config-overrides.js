const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {	//配置上babel-plugin-import
    libraryName: 'antd',		//针对的是antd
    libraryDirectory: 'es',		//源码文件夹中的es文件夹
    style: true,				
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {'@primary-color': '#1DA57A'},
  }), 
 );