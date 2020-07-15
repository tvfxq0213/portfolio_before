

## 사용방법

1. servie/config 폴더 안에 dev.js파일을 만든다.
2. dev.js 파일안에 mongoDB 정보를 넣는다
ex)
<pre>
  <code>
  module.exports = {
  mongoURI: 'mongodb+srv://DBuser:dbpassword@boilerplate-lsskr.mongodb.net/DBprojectName'
  }
</code>
</pre>
3. cd ./server 로 이동하여 npm install (Backend setting)
4. cd ./client 로 이동하여 npm install (Frontend setting)
5. root 에서 npm install
6. npm run dev