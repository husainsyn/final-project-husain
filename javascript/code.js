let tombol_about = document.querySelector('.tombol-about');
  tombol_about.addEventListener('click', () => {
  tombol_about.classList.toggle('flip');
});

let tombol_team = document.querySelector('.tombol-team');
  tombol_team.addEventListener('click', () => {
  tombol_team.classList.toggle('flip');
});

let tombol_kontak = document.querySelector('.tombol-kontak');
  tombol_kontak.addEventListener('click', () => {
  tombol_kontak.classList.toggle('flip');
});

function fungsi_1() {
  alert("👋 Hi, Im Husain \n👀 Im interested in web design and web programming \n🌱 Im currently learning front-end further more to be a backend engineer \n✨ My goal is to be a Full Stack Engineer");
}