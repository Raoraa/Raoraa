const fs = require('fs')

/* #pengembang rissxd
youtube : https://youtube.com/@lynnzxd

HAPUS WM INI DOSA BESAR LU NJIR 
TAMBAHIN NAMALU AJA KALO LU NGEMBANGIN
NIH SC

[ ! ] JANGAN DIJUAL KECUALI LU KEMBANGIN SCNYA
*/

// Setting Utama
global.owner = "6289668164759" //owner number
global.namabot = "RUKA-SARASHINA"
global.ownername = "RISSXD"
// Watermark
global.footer = "_RISS-XD_" //footer section
global.packname = "Sticker By"
global.author = "Riss-XD"

// Mode Bot
global.status = false //"self/public" section of the bot

// Saluran Whatsapp
global.idsaluran = "120363325328533494@newsletter"
global.namasaluran = "FOLLOW MY CHANNEL WHATSAPP 📍"

// Image
global.thumbnail = 'https://pomf2.lain.la/f/2i4cjtsg.jpg'

//database 
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo
global.themeemoji = '🔥'
global.mess = {
ingroup: "It's not funny, this feature is only for groups💢",
admin: "not funny, only group admins use this feature💢",
owner: "Wow! You're not my owner🗣️",
premium: "you are not a premium user",
seller: "You don't have access as a seller yet",
wait: "please just wait ngab",
daftar: "kamu belum terdaftar\nsilahkan ketik .daftar"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
