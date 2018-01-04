# vue-taobao
vue2+vuex+vue-router+axios

npm install
<br/>
npm run dev

<br/>
# 日常更新记录
<br/>
2017-12-30 创建项目<br/>
2017-12-31 看着淘宝网的布局和逻辑开始构思<br/>
2018-1-1 初始完成页面路由、vuex创建、需要的api/json创建<br/>
2018-1-2 商品列表、商品详情布局+业务逻辑编写<br/>
2018-1-3 添加购物车组件<br/>
<br/>
# 日常填坑记录
<br/>
1.路由参数传递
<br/>
this.$router.push({'name':'routerName', params: {id:id}}); url = /routerName/id
<br/>
this.$router.push({'path':'/routerpath', query: {id:id}}); url = /routerpath?id=id
<br/>
<br/>
2.css等静态资源引入index的时候要写安全路劲
<br/>
` href="../static/css/reset.css" `，这样跳转到任何页面手动刷新页面也不会加载失败
<br/>
<br/>
3.动态改变class
<br/>
html `:class="{'class-name' : active === index}"`  js `this.active = index;`
