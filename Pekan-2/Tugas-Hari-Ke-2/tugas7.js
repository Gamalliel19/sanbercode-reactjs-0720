// CALLBACK
// // contoh callback

// setTimeout(function(){
//     console.log('saya dijalankan belakangan');
// }, 3000)

// console.log("saya dijalankan pertama")


// // membuat callback 

// function periksaDokter(nomorAntri, callback){
//     if(nomorAntri > 50){
//         callback(false);
//     }else{
//         callback(true);
//     }
// }


// periksaDokter(25, function(check){
//     if(check){
//         console.log('sebentar lagi')
//     }else{
//         console.log('saya keliling dulu')
//     }
// })




// PROMISE
// var isMomHappy = true;

// // promise
// var willGetnewPhone = new Promise(
//     function(resolve, reject){
//         if(isMomHappy){
//             var phone = {
//                 brand : 'samsung',
//                 color: 'black'
//             };
//             resolve(phone); // janji di pnuhi maka resolve
//         }else{
//             var reason = new Error('mom is not happy');
//             reject(reason); //reject promise
//         }
//     }
// )

// function askMom(){
//     willGetnewPhone
//     .then(function(fullfilled){
//         //janji terpenuhi
//         console.log(fullfilled);
//         // akan menampilkan phone [samsung black]
//     })
//     .catch(function(err){
//         //jika janji tidak terpenuhi
//         console.log(err.message);
//         // akan menampilkan mom is not happy
//     });
// }

// askMom();


// Soal 1

