var qrcodeDiv = document.getElementById('qrcode');



const generateQRCode = () => {

    qrcodeDiv.innerHTML = '';

    var qrcode = new QRCode(qrcodeDiv,{
        width : 400,
        height : 400,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    var text = document.getElementById('textValue').value;

    qrcode.makeCode(text);

    qrcodeDiv.style.display = 'flex';
    var btn = document.createElement('button');
    btn.classList.add('download_btn');
    qrcodeDiv.appendChild(btn);

    var download_btn = document.createElement('a');
    download_btn.setAttribute('download','qrcode.png');
    download_btn.innerHTML = 'Download';
    

    btn.appendChild(download_btn);

    var img = document.querySelector('#qrcode img');

    setTimeout(() => {
        download_btn.setAttribute('href',img.getAttribute('src'))
    },3000)
}