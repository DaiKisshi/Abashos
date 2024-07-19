let hugCount = 0;
let isLoading = false;

document.getElementById('send-hug').addEventListener('click', function() {
    if (isLoading) return;

    isLoading = true;
    const resultMessage = document.getElementById('result');
    resultMessage.innerHTML = "Enviando abrazo...";

    const loadingBox = document.querySelector('.loading-box');

    loadingBox.style.animation = 'none';
    loadingBox.offsetHeight;
    loadingBox.style.animation = 'loading 5s forwards';

    hugCount++;
    document.getElementById('hug-counter').innerText = `Abrazos enviados: ${hugCount}`;

    setTimeout(function() {
        resultMessage.innerHTML = "Abrazo enviado!";
        isLoading = false;
    }, 5000);
});
