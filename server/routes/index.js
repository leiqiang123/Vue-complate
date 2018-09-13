var express = require('express');
var router = express.Router();
var cros = require('cors')

const crosOptions = {
  origin:'http://localhost:8080',
  credentials:true
}

router.use(cros(crosOptions))

const users = [
  {
    username:'yao',
    password:'123456'
  },
  {
    username:'张三',
    password:'654321'
  }
]

// router.all('*',(req,res,next)=>{
//   res.header('Access-Control-Allow-Origin','http://localhost:8080')
//   res.header('Access-Control-Allow-Headers','content-type')
//   res.header('Access-Control-Allow-Methods','POST,GET,DELETE,OPTIONS')
//   res.header('Access-Control-Allow-Credentials',true)
//   next()
// })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',(req,res)=> {
  const {username,password} = req.body
  let loginSucess = false
  console.log(username,password)

  users.forEach(item => {
    if(item.username == username && item.password == password){
      loginSucess = true
    }
  })
  if(loginSucess){
    res.json({
      code:200,
      msg:'登录成功'
    })
  }
})

router.get('/jsonp',(req,res)=>{
  res.jsonp({
    data:"我是jsonp的数据",
    code:200
  })
})

router.get('/json',(req,res)=>{
  // res.header('Access-Control-Allow-Origin','http://localhost:8080')
  res.json({
    data:"我是json的数据",
    code:200
  })
})


// router.options('/nosimple',(req,res)=>{
//   res.header('Access-Control-Allow-Origin','*')
//   res.header('Access-Control-Allow-Headers','content-type')
//   res.header('Access-Control-Allow-Methods','POST,GET,DELETE,OPTIONS')
//   res.send()
// })
router.post('/nosimple',(req,res)=>{
  // res.header('Access-Control-Allow-Origin','*')
  res.json({
    data:"我是post请求",
    code:200
  })
})

module.exports = router;
