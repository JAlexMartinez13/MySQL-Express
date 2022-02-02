const res = require('express/lib/response')
const mysql = require('mysql2')



// const query = `SELECT * FROM Products`

// connection.query(query, (err, results, fields) => {

//     if(err){
//         console.log(err)
//     }

//     console.log(results)

// });

const getAllProducts = async () =>{
    
    const query = `SELECT * FROM Products`
    const [results, fields] = await connection.promise().query(query)

    console.log(results)

    return results
}

const createProducts = async (product) =>{

    const insertQuery = `INSERT INTO Products (Description, SKU, UserId)
    VALUES ('${product.description}', '${product.sku}', ${product.userId})`

    const [results, fields] = await connection.promise().query(insertQuery)

    console.log(results)
    
    return results
}

createProducts({
    description: "Alexs new Product",
    sku: "Alex1234",
    userId: 1
})

getAllProducts()


connection.end();



