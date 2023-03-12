const express = require('express')
const userRouter = require('./router/user')
const productRouter = require('./router/product')
const categoryRouter = require('./router/category')

const app = express()
const port = 3001

app.use(express.json())

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/category', categoryRouter)

app.get('/', (req, res) => {
  res.json({ mess: "hello world!" })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})