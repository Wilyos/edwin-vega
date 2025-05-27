let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let contacto = document.querySelector('#btn-contacto');
let sobreMi = document.querySelector('#btn-sobreMi');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

contacto.onclick = (e) => {
    e.preventDefault();
    const downloadLink = document.querySelector('#downloadContact');
    if (downloadLink) {
        downloadLink.click();
    }
};

sobreMi.onclick = () => {
    document.getElementById("sobreMi").scrollIntoView({
        behavior: "smooth"
    });
};

const vcardData = `
BEGIN:VCARD
VERSION:3.0
FN:Edwin Vega
N:Vega;Edwin;;;
TEL;TYPE=work:+573017973455
EMAIL:disenador@luma.com.co
END:VCARD
`.trim();

const blob = new Blob([vcardData], { type: 'text/vcard' });
const url = URL.createObjectURL(blob);

const downloadLink = document.querySelector('#downloadContact');
if (downloadLink) {
    downloadLink.href = url;
}