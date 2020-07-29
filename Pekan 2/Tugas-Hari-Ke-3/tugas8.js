// soal 1

console.log('---Soal 1---')
//Rumus luas lingkaran
let pi = 3.14;
let r = 14;

const luas = () =>{
    const luas = (pi * r)^2;
    return `Luas lingkaran = ${luas} cm`
}
console.log(luas())



// rumus keliling lingkaran
let piw = 22/7;
let ar = 14;

const keliling = ()=>{
    const luasLingkaran = 2*piw*ar;
    return `Keliling lingkaran = ${luasLingkaran} cm`;
}

console.log(keliling());


// soal 2

console.log('---Soal 2---')
let kalimat = ""

const masukKata = () =>{

    const satu = 'saya';
    const dua = 'adalah';
    const tiga = 'seorang';
    const empat = 'frontend';
    const lima = 'developer';
    
    kalimat = `${satu} ${dua} ${tiga} ${empat} ${lima}`
    return kalimat;
}
console.log(masukKata())






// soal 3

console.log('---Soal 3---')
class Book {
    constructor(name, totalPage, price){
        this.name = name;
        this.totalPage = totalPage;
        this.price = price;
    }
}

class Komik extends Book{
    constructor(isColorful){
        super();
        this.isColorful = isColorful;
    }
    
}

punyaBuku = new Book('naruto', 230, 15000);
bukuku = new Komik(true);   
console.log(punyaBuku)
console.log('Komik adalah buku yang penuh warna = ' + bukuku.isColorful)

