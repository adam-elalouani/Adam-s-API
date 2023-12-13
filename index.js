const express = require('express')
const app = express()
app.use(express.json());

app.get('/add',function(req,res){
    console.log(req.body.array)
    const sum = res.reduce((accumulator, currentValue) => accumulator + currentValue,0).toString();
    res.json({sum});
})

app.get('/product', function(req,res){
    console.log(req.body.array)
   const product = res.reduce((accumulator,nums) => acc * num,1);
    res.json({product});
})

app.get('/evens', function(req,res){
    console.log(req.body.array)
   const evens = res.filter(num => num % 2 === 0);
    res.json({evens})
})

app.get('/min', function(req,res){
    console.log(req.body.array)
   const min = Math.min(...array);
    res.json({min})
})

app.get('/max', function(req,res){
    console.log(req.body.array)
   const max = Math.max(...array);
    res.json({max})
})

app.get('/sort', function(req,res){
    console.log(req.body.querry)
  const nowsorted =  res.sort((a,b) => (ascending))
    res.json(nowsorted)
})

app.get('/target', function(req,res){
    console.log(req.body.array)
    const extratarget = array.some
    res.json(extratarget)
    //not sure how to do this . . . 
})

app.listen(3000, () =>{
    console.log('yes')
})