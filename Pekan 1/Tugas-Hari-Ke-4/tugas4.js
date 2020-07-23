// Soal 1
console.log("================");
console.log('===  SOAL 1  ===');
console.log("================");
console.log("===============");
console.log('LOOPING PERTAMA');
console.log("===============");
var isi = " - I Love coding";
for(var i=1; i<=20; i++){
    if(i%2 === 0){
        console.log(i + isi);
    }
    
}

console.log("===============");
console.log('LOOPING KEDUA');
console.log("===============");
var KalimatBantu = " - I Love coding";
for(var i=20; i>=1; i--){
    if(i%2 === 0){
        console.log(i + KalimatBantu);
    }
}

// Soal 2
console.log("================");
console.log('===  SOAL 2  ===');
console.log("================");
for(var i=1; i<=20; i++){
    if(i%2 === 0){
        console.log(i + " - Berkualitas");
    }else if(i%3 ===0){
        console.log(i + " - I Love Coding");
    }else if(i%1 === 0){
        console.log(i+" - Santai")
    }
}


// Soal 3
console.log("================");
console.log('===  SOAL 3  ===');
console.log("================");


for(var i = 1; i <= 7; i++) {
    var isi = '';
    for(var j = 1; j<= i; j++) {
        isi += "#";
    }
    console.log(isi)
}



// Soal 4
console.log("================");
console.log('===  SOAL 4  ===');
console.log("================");

var kalimat="saya sangat senang belajar javascript"

var kumpul = kalimat.split(" ");
console.log(kumpul);


// // Soal 5
console.log("================");
console.log('===  SOAL 5  ===');
console.log("================");
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
var daftar = daftarBuah.join("\n");
for ( var i=1; i<2; i++){
    console.log(daftar);
}
