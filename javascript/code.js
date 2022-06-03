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
  alert("Don't Blame Yourself. \nNo heroes ever died in his bed.");
}