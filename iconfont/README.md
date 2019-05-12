
### 使用
  
  __替换原生图标库__  
  android/app/src/main/assets/fonts  
  project/resource/  
  替换 iconfont.ttf  

  __替换js中的iconfont.svg__  
  react-native-app/src/assets/iconfont/iconfont.svg  
  react-native-app/iconfont/demo.css,   
  react-native-app/iconfont/demo_index.html,   
  react-native-app/iconfont/iconfont.css  
    
  __编译生成iconfont.json__
  yarn iconfont-map


### 查看项目总引入的图标

   __安装依赖__  
   npm install -g nodemon
   
   __运行__  
   yarn iconfont
   
   __查看__  
   浏览器中打开http://localhost:9000/
    
    
    
```
    <IconEx name={''} 
            color={''} 
            size={25} 
            onClick={this.iconClick}/>

``` 