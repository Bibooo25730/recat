 ### 记录
 > <a href="http://www.bibooo.top/"><img src="https://github.githubassets.com/images/icons/emoji/memo.png" class="emoji" >博客</a> 

## react按需加载Antd

1.安装react-app-rewired

```
npm install react-app-rewired customize-cra
````

2.修改package.json

```
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
````

3.使用babel-plugin-import 按需加载组件代码和样式的插件

```
npm install babel-plugin-import
```

4.使用组件

```
import { Button } from 'antd';
```

## 使用Antd Menu导航栏问题

<img src="https://raw.githubusercontent.com/alin25730/Git/master/20220127001323813.jpg">

1. 先说一下 我用Antd 的layout组件 我想点击header组件里面的图标让 左边Menu列表 展开or 隐藏

2. <b>实现方法</b>

3. openKeys={sub.sub} 这个是menu展开项,我点击判断逻辑,发生对应的表key,这个不是逻辑问题,主要是关于hooks useState的用法. 

4. 它是异步的就很烦,因为是判断boolean我直接取反了,还成了。的🤣玄学玄学玄学

## React-router v6嵌套路由

1. 因为是瞎喷,不懂就百度.我找到了一个错误 Router 不能嵌套在Router中,看到评论说不支持子路由.

2. 我当时人傻了,我想了想不可能啊,那有更新升级越来越low的,于是我看了看文档

3. 在Route里包裹一个Route就是子路由了,path命名要以父路由名开头 比如:/father/son 这格式的

## Websocekt实现消息通知

1. 大概场景有个求资源区,用户可以在哪留言,发贴找需要的资源,我在后台可以收到信息.

2. 这样就有前台展示,和后台管理

3. websocekt个人理解是可以让服务端主动向客户端推送信息,HTTP只能客户端请求服务端.

