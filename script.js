document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud.');
        }
        alert('Mensaje enviado con éxito.');
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        alert('Hubo un error al enviar el mensaje: ' + error.message);
    });
});
