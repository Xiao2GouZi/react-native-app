
  注意
  1, 替换新的图标库的时候要到对应的
     android/app/src/main/assets/fonts
     project/resource/
     替换 iconfont.ttf
  2, 替换react-native-app/src/font/iconfont.svg
  3, 在react-native-app/src/font 执行iconfont_mapper.sh iconfont.svg脚本 生成iconfont.json

  4.全局安装npm install -g nodemon 运行yarn iconfont命令需要
    替换demo.css, demo_index.html, iconfont.css
    执行 yarn iconfont
    浏览器中打开http://localhost:9000/  就可以看到项目中用的iconfont