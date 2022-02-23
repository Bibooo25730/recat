# Bibooo网盘资源

> 网站资源皆来自互联网,本为测试用途 如果侵权联系qq:951225758 下架<br/>
> 本网站图片，文字之类版权申明，本网站无法鉴别所上传图片或文字的知识版权，如果侵犯，请及时通知我们，本网站将在第一时间及时删除。<br/>
> 凡以任何方式登录本网站或直接、间接使用本网站资料者，视为自愿接受本网站声明的约束。

## 项目文档
 <a href="https://github.com/alin25730"><img src="https://github.githubassets.com/images/icons/emoji/memo.png" class="emoji" >Github</a> 

> 项目介绍<br/>

前端：React   后端：Node  数据库：mongdb 

## 业务理解

> 这里只是大致梳理一下 "干什么" 

资源即大部分都是电影保存在网盘里,我们分享网盘连接,用户就可以保存收看了。 所以应该是有 游客 和 用户 这个概念权限管理吧！游客只能看比如电影的简介信息,看不到电影分享的链接.

> 简介

为了服务器的效率,我打算了把图片资源(电影封面)放到图床上面 https://imgurl.org/ 启用外链的形式<br/>
当然数据我不可能一条一条的存入数据库,我肯定有个后台管理,里面有增删改查电影资源等。

### 后台管理

> 注册模块

Administrator 分 tourist  当然只有一个管理员,后台和前台都有注册。在注册的时候 游客的字段是tourist,当他有了激活码的时候 他的字段会修改成member。


注册的时候使用crypto-js对密码加密保存在数据库里

> 登录模块

登录是用邮箱号登录加密码 这里会把数据库的密码进行解密和传过来的密码进行比对。登录之后会发送token。token时间设置三天吧！前台做个持久化登录。

> 录入模块

后台要录入电影的信息（jwt验证）,我现在没想好前端提交布局怎么做,我想的是用个markDown来提交，又不是做博客。我打算自定义信息框吧！电影的封面存入的是一个网络地址。

### 后台管理

> 一般后台管理页面不用做适配,我准备Antd ui框架,这个框架很火,我们也要跟随主流，echarts数据可视化到时候可以用上,虽然这个后台只有我一个人操作,但是简历可以考虑一下的。

> 说到echarts都快忘了,在写Vue的时候用过,这无所谓,主要是数据格式我还想..

> 后台管理就不要那么多功能了,像导航栏吧,增删改查数据.

> React我还是用新版吧6的,虽然很多都改动了,人不能待在舒适区,虽然5版本的好用。但更新毕竟有它的道理吧！！！

> 因为要数据可视化我录入接口重新改了一下 具体可以看代码,录入查找有没有相同的类型 如果有在fileType（数组）增加数据 因为要分类嘛。。现在多了一个title的请求字段

> 我先做录入这方面的前端,数据可视化像什么柱状图 饼图都是展示在首页的,我要先有数据才能做.录入的话我不打算用React markdown的包做,我自己定义信息框吧！

<b>创建新用户</b>
* Method:POST
* URL: /api/user/register
* Headers:application/x-www-form-urlencoded
* Body
```
{
	"name": "Bibooo",
	"email": "951225758@qq.com",
	"password": "U2FsdGVkX1+9ijRjnQC+z51QyBForYjFk1XjI40qkzw=",
	"authority": "Administrator",
	"_id": "61ebf9456f70790d8eebb6b6",
	"__v": 0
}
```
<b>登录</b>

* Method:POST
* URL: /api/user/login
* Headers:application/x-www-form-urlencoded
* Body
```
{
	"success": true,
	"token": "BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWJmOTQ1NmY3MDc5MGQ4ZWViYjZiNiIsIm5hbWUiOiJCaWJvb28iLCJhdXRob3JpdHkiOiJBZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjQyODU2OTM4LCJleHAiOjE2NDI4NjU4MjZ9.spW9xshqVbZ8IrhMEZ-nWTKKzRAY4O4vTdF_D04i7PY"
}
```

<b>录入</b>

* Method:POST
* URL: /api/movie/addMovie
* Headers:application/x-www-form-urlencoded
* Headers:Authorization + token
* Body
```
{
	"filmtitle": "aaaa",
	"fileImg": "aa",
	"fileType": "a:2",
	"filebrief": "aa",
	"network": "aa",
	"password": "aa",
	"_id": "61ecd03b92f2260d3828b3d2",
	"__v": 0
}
```

<b>删除</b>

* Method:POST
* URL: /api/movie/RemoveMovie
* Headers:application/x-www-form-urlencoded
* Headers:Authorization + token
* Body 携带参数 title and filetitle
```
{
	"acknowledged": true,
	"modifiedCount": 1,
	"upsertedId": null,
	"upsertedCount": 0,
	"matchedCount": 1
}
```


## 前台展示
<img src = 'https://s3.bmp.ovh/imgs/2022/02/38c863a46f645b65.png' />  <img src = 'https://s3.bmp.ovh/imgs/2022/02/d1482659a975cfe6.png' />

> 登录注册 邮箱验证码验证

<img src = 'https://s3.bmp.ovh/imgs/2022/02/88aa3d0d29bec33d.png' /><img src = 'https://s3.bmp.ovh/imgs/2022/02/9746797b4e8a584d.png' /><img src = 'https://s3.bmp.ovh/imgs/2022/02/9b29a8079181e36f.png' />

> 移动UI框架antd-mobile使用，用户反馈建议,bananer，实时搜索

<img src = 'https://s3.bmp.ovh/imgs/2022/02/8d95bf52518847ce.png' /> <img src = 'https://s3.bmp.ovh/imgs/2022/02/7808f0a68e9f2298.png' /> <img src = 'https://s3.bmp.ovh/imgs/2022/02/88d50d5fb8013d1f.png' />

> 用户发贴,用户评论回复功能

<img src = 'https://s3.bmp.ovh/imgs/2022/02/d3a075d84add4aa7.png' />

> 管理员对用户的反馈的回复,和发帖的回复
