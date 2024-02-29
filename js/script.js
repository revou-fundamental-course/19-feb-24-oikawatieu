function replaceName(){
    let nama = prompt("Isi nama kamu")
    document.getElementById("nama").innerHTML = nama
}
replaceName();


const containers = document.querySelectorAll('.container1');

function showAllTimelineContent() {
  containers.forEach(container => {
    container.style.display = 'block'; 
  });
}

showAllTimelineContent();

  
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.slides img');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3000); 
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
 
  var nama = document.getElementById("nama").value;
  var tgl_lahir = document.getElementById("tgl_lahir").value;
  var jenis_kelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
  var pesan = document.getElementById("pesan").value;
  var hasilSubmit = document.getElementById("hasilSubmit");
  hasilSubmit.innerHTML = `
    <p>Nama: ${nama}</p>
    <p>Tanggal Lahir: ${tgl_lahir}</p>
    <p>Jenis Kelamin: ${jenis_kelamin}</p>
    <p>Pesan: ${pesan}</p>
  `;
  alert("Terima kasih atas respon Anda!");
});

  
