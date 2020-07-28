// di index.js
var readBooks = require('./callback.js')
const readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
//Tulis code untuk memanggil function readBooks di sini
readBooks(10000, books[0], function(check){
    if(check != 0){
        readBooks(check, books[1], function(check){
            if(check!=0){
                readBooks(check, books[2], function(check){
                    if(check != 0){
                        console.log('masih ada waktu sisa ' + check);
                    }else{
                        console.log('waktu habis')
                    }
                })
            }
        })
    }
})





