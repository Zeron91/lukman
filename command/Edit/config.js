const { modul } = require('../Edit/module');
const { chalk, fs, proces } = modul;

global.ownerNumber = ["6282399255216@s.whatsapp.net"]
global.namabotnya = 'Cyber Is Real'
global.namaownernya = 'Cyber Executed'
global.packname = '\n\n\n\n\n\n\n\n\n\n© Cyber||+62🇲🇨\nI`m From Indonesia\n\n\n\n\n\n\n\n\n\n'
global.author = '\n\n\n\n\n\n\n\n\n\nWa : 0823-9925-5216\nYT : Cyber S-C-D-B\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'kirbotz'
global.lolkey = 'Atakbotz'
global.dapkey = 'Kirbotz123'
global.kirkey = 'KirBotz'
global.email = 'id3026799@gmail.com'
global.group = 'https://bit.ly/38oNU0D'
global.youtube = 'https://bit.ly/39Ivus6'
global.website = 'https://bit.ly/3yk3gOo'
global.github = 'https://bit.ly/3FqVBj8'
global.noown = 'https://wa.me/6282399255216'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.api = 
{
    success: '```Success✅```',
    admin: '```Fitur Khusus Admin Group!!!```',
    botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
    owner: '```Fitur Khusus Owner Bot!!!```',
    group: '```Fitur Digunakan Hanya Untuk Group!!!```',
    private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
    bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
    error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
    wait: '```Sabar Jancok```',
    ban: '_Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya_',
    verif: '_Maaf Kak Kakak Belum Jadi User CΨβΣR ΣXΣCUTΣD Silahkan Register Terlebih Dahulu Click Di Bawah_'
}

global.thumb = fs.readFileSync('./command/Image/thumb.jpg')
global.vidkir = { url: 'https://i.top4top.io/m_20346wtuk5.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
proces.on('uncaughtException', console.error);