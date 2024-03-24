class ProductManager {
    static ultId = 0;

    constructor() {
        this.products = [];
    }

    addProduct(nuevoObjeto) {
        let { title, description, price, thumbnail, code, stock } = nuevoObjeto;

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios.");
            return;
        }

        if (this.products.some(item => item.code === code)) {
            console.log("El código debe ser único, ingrese un código distinto.");
            return;
        }

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        this.products.push(newProduct);
    }

    getProducts() {
        console.log(this.products);
        return this.products;
    }

    getProductById(id) {        
        const buscado = this.products.find(item => item.id === id);

        if (!buscado) {
            console.log(`Producto con id: ${id} no encontrado`);
        } else {
            console.log(`Producto con id: ${id} y código: ${buscado.code}, encontrado:`);
            return buscado;
        }
    }
}

// Pruebas -------------------------------------------------------------
const manager = new ProductManager();
console.log(manager.getProducts()); 

// Producto que respeta todas las pautas -------------------------------
manager.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen", 
  code: "abc123",
  stock: 25
});

// Repitiendo el code para ver que se maneje bien el error --------------
manager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba con código repetido",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
});
  
// Agregando más productos ----------------------------------------------
manager.addProduct({
    title: "producto prueba 2",
    description: "Este es un producto prueba",
    price: 4564,
    // quitando thumbnail
    code: "abc124",
    stock: 19
});  

manager.addProduct({
    title: "producto prueba 3",
    description: "Este es un producto prueba",
    price: 8770,
    thumbnail: "Sin imagen", 
    code: "abc125",
    stock: 40
});

console.log(manager.getProducts()); 

// Busquedas por id -----------------------------------------------------
console.log(manager.getProductById(3));
console.log(manager.getProductById(999));
console.log(manager.getProductById(2));