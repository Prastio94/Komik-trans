document.getElementById('translateBtn').addEventListener('click', () => {
  // Mencari tab yang sedang aktif dan dibuka oleh pengguna
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    // Mengirim pesan ke content.js yang ada di tab tersebut
    chrome.tabs.sendMessage(tabs[0].id, {action: "translateComic"}, (response) => {
      console.log("Perintah terjemahan telah dikirim ke halaman.");
    });
  });
});
