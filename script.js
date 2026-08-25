const btn = document.getElementById('btnToggle');

btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

const kumpulanMantra = [
    "\"Ego hari ini adalah bahan bakar untuk kejayaan di masa depan.\"",
    "\"Jangan takut gagal, bahkan sebuah reruntuhan pun bisa menjadi awal dari istana yang megah.\"",
    "\"Jembatan khayalan hanya bisa diseberangi oleh mereka yang berani melangkah.\"",
    "\"Coding adalah sihir modern. Setiap baris kode adalah jalinan mantra yang kamu ciptakan.\"",
    "\"Ruler Of The Century End tidak akan berhenti hanya karena satu baris error!\""
];

const btnMantra = document.getElementById('btnMantra');
const teksMantra = document.getElementById('teksMantra');

btnMantra.addEventListener('click', function() {
    const indeksAcak = Math.floor(Math.random() * kumpulanMantra.length);
    teksMantra.innerText = kumpulanMantra[indeksAcak];
});
