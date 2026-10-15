/* Data contoh + penyimpanan lokal (simulasi, belum basis data). Struktur field dipetakan ke tabel pada Pertemuan 5. */
const Store=(()=>{const K='edusync.v1',TODAY='2026-10-07',DT=['2026-10-05','2026-10-06','2026-10-07','2026-10-08','2026-10-09','2026-10-10'],DN=['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
const seed=()=>({role:'mhs',empty:false,
reg:[{id:'c1',n:'Praktik Aplikasi Web',d:0,t:'07:00',e:'09:30',r:'Lab 2'},{id:'c2',n:'Komputasi Awan',d:1,t:'13:00',e:'14:40',r:'R.105'},{id:'c3',n:'Jaringan Komputer',d:2,t:'09:40',e:'11:20',r:'R.204'},{id:'c4',n:'Keamanan Siber',d:3,t:'10:00',e:'11:40',r:'R.301'},{id:'c5',n:'Probabilitas dan Statistika',d:4,t:'08:00',e:'09:40',r:'R.210'}],
ov:[{cid:'c3',date:'2026-10-07',t:'13:00',e:'14:40',r:'Lab 3',why:'Dosen dinas luar; kuliah digeser ke siang.',by:'Komti TI-J 2024 · 5 Okt 08:15'}],
tasks:[{id:1,n:'Kuis Awan',m:'Komputasi Awan',date:'2026-10-06',t:'10:00',done:true},{id:2,n:'Ringkasan Jurnal',m:'Keamanan Siber',date:'2026-10-08',t:'12:00',done:false},{id:3,n:'Laporan Praktikum Web',m:'Praktik Aplikasi Web',date:'2026-10-09',t:'23:59',done:false}]});
let s;try{s=JSON.parse(localStorage.getItem(K))}catch(x){}if(!s)s=seed();
const save=()=>{try{localStorage.setItem(K,JSON.stringify(s))}catch(x){}};
const fmt=d=>{const i=DT.indexOf(d);return i>=0?`${DN[i]} ${5+i} Okt`:d};
return{get:()=>s,save,reset(){s=seed();save()},TODAY,DT,DN,fmt,CLASS_CODE:'TIJ-2024',KOMTI_CODE:'KOMTI-24'}})();
