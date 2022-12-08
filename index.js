const express = require ("express");
const app = express ();


app.use(express.json());

const productos = [
    {id:1, title:"Pantalla", precio:100, enroll: true},
    {id:2, title:"Teclado", precio:200, enroll: true},
    {id:3, title:"Mause", precio:150, enroll: true},
    {id:4, title:"Auriculares", precio:50, enroll: false},
    {id:5, title:"SSD", precio:8000, enroll: true},
    {id:6, title:"RAM", precio: 5000, enroll: true},
    {id:7, title:"Placa de video", precio:160000, enroll: true},
];

app.get("/", (req,res) =>{
    res.send("JS api")
});

app.get("/api/productos/:id", (req,res) => {
    const productos = productos.find(c => c.id === parseInt(req.params.id));
    if (!productos) return res.status(404).send("Producto no encontrado");
    else res.send(productos);
});

app.get("/api/productos", (req,res) =>{
    res.send(productos);
});


app.post("/api/productos", (req,res) => {
    const productos = {
        id: productos[productos.length - 1].id + 1,  
        title: req.body.title,
        precio:parseInt(req.body.precio),
        enroll:(req.body.enroll === "true")
    };

    productos.push(productos);
    res.send(productos)
});

app.delete("/api/productos/:id", (req, res) =>{
    const productos = productos.find(c=> c.id === parseInt(req.params.id));
    if (!productos) return res.status(404).send("Producto no encontrado");

    const index = productos.indexOf(productos)
    productos.splice(index, 1);
    res.send(productos);
});

const port = process.env.port || 80;
app.listen(port,() => console.log(`Escuchando en puerto ${port}.`));
