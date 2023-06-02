class ProductManager {
  constructor() {
    this.products = [];
  }
//Metodo para mostrar todos los productos
  getProducts = () => {
    return this.products;
  };


//   Metodo para validar id del producto
  getProductById =(regId) =>{

const productId = this.products.filter((prodid)=> prodid.id ===regId)
if (productId.length >0){
return "Producto encontrado"
}else{
    return "Producto no encontrado";
}
  }

  //Metodo para crear id random
  getId = () => {
    const numId = this.products.length;

    if (numId > 0) {
      return this.products[numId - 1].id + 1;
    } else {
      return 1;
    }
  };
  //Metodo para agregar productos
addProduct = (title, description, price, thumbnail, code, stock) => {
    if(!title || !description || !price || !thumbnail ||!code ||!stock) return "Favor de no dejar ningun campo vacio"
const valCode= this.products.some((producto)=>producto.code ===code)
if(valCode) return `El código del producto ${title} se encuentra registrado,favor ingresar otro código`

const product = {id: this.getId(),title,description,price,thumbnail,code,stock};
this.products.push(product);
return "Producto agregado Correctamente."
}
    
  };

//test
const productos = new ProductManager()
productos.addProduct("Impresora", "Hardware de computadora", 15000, "sin imagen", 60, 20);
productos.addProduct("Computadora", "Equipo de oficina", 30000, "sin imagen", 70, 10);
console.log("--------------------------------------------------");
console.log("Lista de Productos:    ", productos.getProducts());
console.log("--------------------------------------------------");
console.log("Encontrar producto por ID:    ", productos.getProductById(2));