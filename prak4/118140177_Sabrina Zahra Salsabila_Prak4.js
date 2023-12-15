/*
  Nama        : Sabrina Zahra Salsabila
  NIM         : 118140177
  Kelas       : RC
  Link GitHub : https://github.com/118140177SabrinaZahraSalsabila/prak-pemweb
*/

function hitung() {
  const inputElement = document.getElementById('inBilangan');
  const number = parseInt(inputElement.value);
  
  if (number <= 0 || isNaN(number)) {
    alert("Tidak valid! Masukkan bilangan bulat positif.");
    return;
  }

  let sumGanjil = 0;
  let sumGenap = 0;

  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      sumGenap++;
    } else {
      sumGanjil++;
    }
  }
  
  document.getElementById("result").innerHTML = `Hasil :`;
  document.getElementById("result1").innerHTML = `Jumlah Bilangan Ganjil : ${sumGanjil}`;
  document.getElementById("result2").innerHTML = `Jumlah Bilangan Genap : ${sumGenap}`;

}