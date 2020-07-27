// Soal 1
console.log('---SOAL 1---');
var arrayDaftarPeserta = {
    nama : 'Asep',
    gender : 'laki-laki',
    hobby : 'baca buku',
    tahunLahir : 1992
}


console.log(arrayDaftarPeserta)



// // soal 2
console.log('---SOAL 2---');
var buah = [
    {nama:'strawberry', warna:'merah', "ada bijinya":'tidak', harga:9000},
    {nama:'Jeruk', warna:'oranye', "ada bijinya":'ada', harga:8000},
    {nama:'Semangka', warna:'Hijau & Merah', "ada bijinya":'ada', harga:10000},
    {nama:'Pisang', warna:'Kuning', "ada bijinya":'tidak', harga:5000}
]

var filterBuah = buah.filter(function(item){
    return item.nama === 'strawberry';
})
console.log(filterBuah)


// soal 3
console.log('---SOAL 3---');
var dataFilm = []

function isiData(nama, durasi, genre, tahun){
    var namaFilm = dataFilm.push(nama);
    var durasiFilm = dataFilm.push(durasi);
    var genreFilm = dataFilm.push(genre);
    var tahunFilm = dataFilm.push(tahun);
    return namaFilm, durasiFilm, genreFilm, tahunFilm;
}

var datanya = isiData('star wars', '2jam', 'sci-fi', 2005);
console.log(dataFilm)

var filterFilm = dataFilm.filter(function(item){
    return item
})
console.log(filterFilm);


// soal 4
console.log('---SOAL 4---');
// release 0
class Animal {
    // Code class di sini
    constructor(name, legs = 4, cold_blooded=false){
        this.name = name;
        this.legs = legs;
        this.cold_blooded = cold_blooded;
    }
    get cnam(){
        return this.name;
    }
    set cnam(x){
        this.name = x;
    }
    
}

var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// release 1
// Code class Ape dan class Frog di sini
 
class Ape extends Animal{
    constructor(name){
        super(name);
        this.legs = 2;
    }
    yell(){
        return 'Auooo';
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
console.log(sungokong.yell()) //Auooo
console.log(sungokong)
console.log(sungokong.name) // "kera sakti"
console.log(sungokong.legs) // 2
console.log(sungokong.cold_blooded) // false


class Frog extends Animal{
    constructor(name){
        super(name);
        this.cold_blooded = true;
    }
    jump(){
        return 'hop hop';
    }
}
var kodok = new Frog("buduk")
kodok.jump() // "hop hop"
console.log(kodok.jump()) //hop hop
console.log(kodok)
console.log(kodok.name) // "buduk"
console.log(kodok.legs) // 4
console.log(kodok.cold_blooded) // true


// soal 5
console.log('---SOAL 5---');

class Clock {
    // Code di sini
    constructor({template}){
        var timer;
        function render(){
            var date = new Date();
            var hours =date.getHours();
            if(hours<10){
                return hours = '0 ' + hours;
            }
            var mins = date.getMinutes();
            if(mins < 10) {
                return mins = '0' + mins;
            }
            var secs = date.getSeconds();
            if(secs < 10){
                return secs = '0' + secs;
            }
            var output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
            console.log(output);
        }
        this.stop = function(){
            clearInterval(timer);
        };
        this.start = function(){
            render();
            timer = setInterval(render, 1000);
        }
    }
}
var clock = new Clock({template: 'h:m:s'});
clock.start();  