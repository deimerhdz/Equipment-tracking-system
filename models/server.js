const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');
const fileUpload = require('express-fileupload');

class Server {
    constructor(){
        this.app=express();
        this.port = process.env.PORT;
        this.path = {
            auth:'/api/auth',
            users:'/api/users',
            uploads:'/api/uploads',
            equipments:'/api/equipments',
        }
       
        //conectar a base de datos
        this.conectarDB();
        //midlewares
        this.middlewares();
        //routes
        this.routes();
    }

   async conectarDB(){
    await dbConnection();
    }
    
    middlewares(){
        //cors
        this.app.use(cors());
        //lectura y parseo del body
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static('public'));
        //carga de archivo
        this.app.use(fileUpload({
            useTempFiles:true,
            tempFileDir:'/tmp/',
            createParentPath:true
        }))

    }
    routes(){
       this.app.use(this.path.auth,require('../routes/auth.routes'));
       this.app.use(this.path.users,require('../routes/user.routes'));
       this.app.use(this.path.uploads,require('../routes/uploads.routes'));
       this.app.use(this.path.equipments,require('../routes/equipment.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
        console.log(`Server on port ${this.port}`)
      })
    }

}

module.exports = Server;