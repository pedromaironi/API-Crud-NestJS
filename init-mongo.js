db.createUser({
    user: 'pedromaironi',
    pwd: '2171983',
    roles: [
      {
        role: 'readWrite',
        db: 'db'
      }
    ]
  });
  
  db = new Mongo().getDB("db");
  
  db.createCollection('productos');
  
  db.productos.insertMany([
    { nombre: 'Camiseta', precio: 20, categoria: 'Ropa' },
    { nombre: 'Pantalones', precio: 30, categoria: 'Ropa' },
    { nombre: 'Chaqueta', precio: 50, categoria: 'Ropa' },
    { nombre: 'Calcetines', precio: 5, categoria: 'Ropa' },
    { nombre: 'Gorra', precio: 15, categoria: 'Accesorios' },
    { nombre: 'Bufanda', precio: 10, categoria: 'Accesorios' },
    { nombre: 'Guantes', precio: 8, categoria: 'Accesorios' },
    { nombre: 'Zapatos', precio: 40, categoria: 'Calzado' },
    { nombre: 'Sandalias', precio: 25, categoria: 'Calzado' },
    { nombre: 'Botas', precio: 60, categoria: 'Calzado' }
  ]);