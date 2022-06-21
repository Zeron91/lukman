const { modul } = require('../Edit/module');
const { fetch, FormData, FileType } = modul;

module.exports = async function uploadFile(buffer) {
let { ext } = await FileType.fromBuffer(buffer)
bodyForm = new FormData();
bodyForm.append('file', buffer, 'res.'+ext)

response = await fetch('https://upload-kirbotz.herokuapp.com/upload', { method: 'post', body: bodyForm, headers: {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,id;q=0.8",
                "content-type": `multipart/form-data; boundary=${bodyForm._boundary}`
            } })

return response.json()
} 