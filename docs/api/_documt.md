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