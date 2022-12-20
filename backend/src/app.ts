import express, {Application} from "express";
import morgan from "morgan";

import IndexRoutes from "./routes/index.routes";
import UserRoutes from "./routes/user.routes";
import ProductRoutes from "./routes/product.routes";
import CategoryRoutes from "./routes/category.routes";

export class App{

    private app:Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000)
    }

    middlewares(){
        this.app.use(morgan('dev'));
        // this.app.use(express.urlencoded({extended: false})) //Recibir datos de un formulario desde un json
        this.app.use(express.json())
    }

    routes(){
        this.app.use(function(req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            next();
        })
        this.app.use(IndexRoutes);
        this.app.use('/api/users', UserRoutes);
        this.app.use('/api/products', ProductRoutes);
        this.app.use('/api/categories', CategoryRoutes);
    }

    async listen(){
       await this.app.listen(this.app.get('port'));
       console.log('Server en el puerto ', this.app.get('port'))
    }
}