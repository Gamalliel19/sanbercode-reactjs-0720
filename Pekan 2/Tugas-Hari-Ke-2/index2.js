var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 


var bookAntri = books.length;
var time = 10000;

function execute(time, ind, booksQueue){
    readBooksPromise(time, books[ind])
    .then(function(remainingTime){
        time = remainingTime;
        booksQueue = booksQueue - 1;
        if(booksQueue>0){
            execute(time, ind+1, booksQueue);
        }
    })
    .catch(function(error){

    });

}
execute(time, 0, bookAntri);


// function bacaBuku(){
//     readBooksPromise(10000, books[0].then(function(sisaWaktu){
//         console.log(sisaWaktu)
//         if(sisaWaktu>0)
//         readBooksPromise(sisaWaktu, books[1].then(function(sisaWaktu){
//             if(sisaWaktu>0){
//                 readBooksPromise(sisaWaktu, books[2].then(function(sisaWaktu){
//                     if(sisaWaktu!=0){
//                         console.log('sudah habis terbaca')
//                     }
//                 }))
//             }
//         }))
//         .catch(function(sisaWaktu){
//             console.log(sisaWaktu)
//         })
//     }))
// }
// bacaBuku();

