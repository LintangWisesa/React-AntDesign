var a = [
    {nama: "Andi", id:1, saldo: 10000},
    {nama: "Budi", id:21, saldo: 5000},
    {nama: "Caca", id:34, saldo: 2000},
    {nama: "Andi", id:123, saldo: 2000},
]

// #1. merge data SERVER BASE = REGISTERED + UNREGISTERED
// var cari = 34
// var topup = 50000
// for (var i=0; i<a.length; i++){
//     if(a[i].id == cari){
//         a[i].saldo = a[i].saldo + topup
//     }
// }

// #2. merge data yg sama dalam 1 tabel


const values = [
    {id: 10, name: 'someName1'},
    {id: 10, name: 'someName2'},
    {id: 11, name:'someName3'},
    {id: 12, name: 'someName4'}
];

const lookup = values.reduce((a, e) => {
  a[e.id] = ++a[e.id] || 0;
  return a;
}, {});

console.log(values.filter(e => lookup[e.id]));