db.createUser({
    user: 'pedromaironi',
    pwd: '2171983',
    roles: [
        {
            role: 'readWrite',
            db: 'utesa'
        }
    ]
});

db = new Mongo().getDB("utesa");

db.createCollection('products');

db.products.insertMany([
    { name: 'Camiseta', price: 20, category: 'Ropa' },
    { name: 'Pantalones', price: 30, category: 'Ropa' },
    { name: 'Chaqueta', price: 50, category: 'Ropa' },
    { name: 'Calcetines', price: 5, category: 'Ropa' },
    { name: 'Gorra', price: 15, category: 'Accesorios' },
    { name: 'Bufanda', price: 10, category: 'Accesorios' },
    { name: 'Guantes', price: 8, category: 'Accesorios' },
    { name: 'Zapatos', price: 40, category: 'Calzado' },
    { name: 'Sandalias', price: 25, category: 'Calzado' },
    { name: 'Botas', price: 60, category: 'Calzado' }
]);

db.createCollection('users');

db.users.insertMany([
    { name: 'Pedro M. Toribio', email: 'pedromaironi@gmail.com', password: '12345678' },
    { name: 'Ivan Mendoza', email: 'ivanmendoza@gmail.com', password: '12345678' },
]);