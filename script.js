document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita il refresh della pagina

    document.querySelector('.loader').classList.remove('hidden'); // Mostra la rotella

    // Opzionalmente, nascondi il form
    document.getElementById('questionForm').style.display = 'none';
});
