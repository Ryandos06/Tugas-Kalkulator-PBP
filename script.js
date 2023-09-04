 // Variabel global
 var ekspresi = "";

 // Fungsi untuk menambahkan angka atau operator ke layar
 function tambahAngka(nilai) {
     if (!(ekspresi === "" && nilai === '0')) {
         ekspresi += nilai;
         document.getElementById("layar").value = ekspresi;
     }
 }

 // Fungsi untuk menghapus layar
 function hapusLayar() {
     ekspresi = "";
     document.getElementById("layar").value = "";
 }

 // Fungsi untuk melakukan perhitungan
 function hitung() {
     try {
         if (ekspresi === "") {
             document.getElementById("layar").value = "";
         } else {
             ekspresi = eval(ekspresi);
             document.getElementById("layar").value = ekspresi;
         }
     } catch (error) {
         document.getElementById("layar").value = "Error";
     }
 }


// // Variabel global
// var ekspresi = "";

// // Fungsi untuk menambahkan angka atau operator ke layar
// function tambahAngka(nilai) {
//     ekspresi += nilai;
//     document.getElementById("layar").value = ekspresi;
// }

// // Fungsi untuk menghapus layar
// function hapusLayar() {
//     ekspresi = "";
//     document.getElementById("layar").value = "";
// }

// // Fungsi untuk melakukan perhitungan
// function hitung() {
//     try {
//         ekspresi = eval(ekspresi);
//         document.getElementById("layar").value = ekspresi;
//     } catch (error) {
//         document.getElementById("layar").value = "Error";
//     }
// }

// // Fungsi untuk menambah operator tambah (+)
// function tambah() {
//     ekspresi += "+";
//     document.getElementById("layar").value = ekspresi;
// }

// // Fungsi untuk menambah operator kurang (-)
// function kurang() {
//     ekspresi += "-";
//     document.getElementById("layar").value = ekspresi;
// }

// // Fungsi untuk menambah operator kali (*)
// function kali() {
//     ekspresi += "*";
//     document.getElementById("layar").value = ekspresi;
// }

// // Fungsi untuk menambah operator bagi (/)
// function bagi() {
//     ekspresi += "/";
//     document.getElementById("layar").value = ekspresi;
// }
