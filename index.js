const express = require ("express")
const path = require( "path");

const productRouter = require( "./src/routers/productos");
const carritoRouter = require("./src/routers/carrito" );

 

const app = express();
const PORT = process.env.PORT || 8080;

 

//app.use( express. static(__dirname+*/public*))

app.use(express. json());
app.use(express.urlencoded({ extended: true }));

app.use( "*/api/productos", productRouter);
app.use( "*/api/carrito", carritoRouter);

 

app.use((req, res) => {
    res. status( 404).json({
    error: -2,
    descripcion: `rute "${req.originalUrl}" metodo "${req.method}" no implementada`,
    });
});

app.Listen(PORT, () => {
console.log(`RUN http://localhost:${PORT}`);
});