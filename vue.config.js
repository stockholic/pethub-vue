//웹팩 설정을 위해 vue.config.js라는 파일을 프로젝트 내부에 작성
// https://cli.vuejs.org/config/#vue-config-js

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

   
  publicPath : "/static/vue",               //index.html 의 css, js link 시작점
  outputDir: "../webapp/static/vue",    // css, js, index.html 배포경로
  indexPath: "../../WEB-INF/index.html",  // index.html 위치, 이름
  devServer: {  
    //proxy: "http://localhost:8080"  
  },  

 
}