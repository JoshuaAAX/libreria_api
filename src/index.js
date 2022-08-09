const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const bookRoutes = require('./routes/books.routes');
const categoryRoutes = require('./routes/categories.routes');
const editorialRoutes = require('./routes/editorials.routes');
const authorRoutes = require('./routes/authors.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());

app.use(bookRoutes);
app.use(categoryRoutes);
app.use(editorialRoutes);
app.use(authorRoutes);

app.use((err, req, res, next)=> {
     return res.json({
         message: err.message
	 })
})

app.listen(4000)
console.log('Server on port 4000')