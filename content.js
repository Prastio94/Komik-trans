// Mendengarkan pesan dari popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "translateComic") {
    console.log("Mulai proses persiapan terjemahan komik...");
    
    // Di sinilah nanti logika utama (seperti deteksi elemen gambar, OCR, dll) akan ditambahkan.
    // Untuk saat ini, kita berikan notifikasi sederhana sebagai bukti bahwa ekstensi sudah terhubung dan berjalan.
    alert("Komik Trans: Ekstensi berhasil merespons! Fitur terjemahan akan segera memproses halaman ini.");
    
    // Mengirimkan balasan kembali ke popup
    sendResponse({status: "Proses terjemahan berhasil dimulai"});
  }
  
  // Mengembalikan true menandakan bahwa kita mungkin akan mengirim respons secara asinkron
  return true;
});
