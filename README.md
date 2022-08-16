# Libreria api

### Información General
Backend de librería con las tecnologías nodejs y el framework de express, 

### Requisitos
```
git
nodejs
npm
docker
```

### Instalación
```
$ git clone https://github.com/JoshuaAAX/libreria_api/
```
Crear un .env en la carpeta del proyecto y pegar este código:
```
DB_USER = hebwcvsrnrwups
DB_PASSWORD = 0a7bd2852e9b56cc278804dd2782ffed17aebd55d9460e22d26ed6dabf9dae8b
DB_HOST =  ec2-44-206-197-71.compute-1.amazonaws.com
DB_PORT = 5432
DB_DATABASE = d2qrisg9mjhm19
```


ejecutar el comando de docker:

```
$ docker build -t libreria_api .
$ docker run -d -p 4000:4000 libreria_api
```
 
  
