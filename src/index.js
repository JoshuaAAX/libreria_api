
//dependencias del proyecto
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//rutas requeridas
const bookRoutes = require('./routes/books.routes');
const categoryRoutes = require('./routes/categories.routes');
const editorialRoutes = require('./routes/editorials.routes');
const authorRoutes = require('./routes/authors.routes');
const userRoutes = require('./routes/users.routes');
const loanRoutes = require('./routes/loans.routes');

//instanciar express
const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


//inicializar la rutas
app.use(bookRoutes);
app.use(categoryRoutes);
app.use(editorialRoutes);
app.use(authorRoutes);
app.use(userRoutes);
app.use(loanRoutes);


//manejador de errores
app.use((err, req, res, next)=> {
     return res.json({
         message: err.message
	 })
})

//asignar valor de puerto
app.set('port', process.env.PORT || 4000)

//abrir puerto del servidor
app.listen(app.get('port'))
console.log('server started')
