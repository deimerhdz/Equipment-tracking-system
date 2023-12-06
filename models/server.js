const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');
const fileUpload = require('express-fileupload');
const {createServer} = require('http');
const { socketController } = require('../sockets/socketController');
class Server {
    constructor(){
        this.app=express();
        this.port = process.env.PORT;
        this.server = createServer(this.app);
        this.io = require('socket.io')(this.server,{
            cors: {
                origins: ['http://localhost:4200']
            }
        })

        this.path = {
            auth:'/api/auth',
            users:'/api/users',
            uploads:'/api/uploads',
            equipments:'/api/equipments',
            reports:'/api/reports'
        }
       
        //conectar a base de datos
        this.conectarDB();
        //midlewares
        this.middlewares();
        //routes
        this.routes();

        //sockets
        this.sockets();
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
       this.app.use(this.path.reports,require('../routes/report.routes'));
    }

    listen(){
        this.server.listen(this.port, () => {
        console.log(`Server on port ${this.port}`)
      })
    }

    sockets(){
        this.io.on('connection',(socket)=>socketController(socket,this.io));
    

    }

}

module.exports = Server;