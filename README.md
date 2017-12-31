# vue-taobao
vue2+vuex+vue-router+axios

npm install
<br/>
npm run dev

<br/>
# 日常坑记录
1.路由参数传递
<br/>
this.$router.push({'name':'routerName', params: {id:id}});url = /routerName/id
<br/>
this.$router.push({'path':'/routerpath', query: {id:id}});url = /routerpath?id=id
<br/>
<br/>
2.css等静态资源引入index的时候要写安全路劲
<br/>
<link rel="stylesheet" href="../static/css/reset.css">，这样跳转到任何页面手动刷新页面也不会加载失败
<br/>
<br/>
3.动态改变class
<br/>
html `:class="{'class-name' : active == index}"`  js`this.active = index;`
