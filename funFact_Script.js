// Esta función realiza una solicitud a la Cat Facts API y a la Cats as a Service (CaaS) para obtener datos de gatos.
function getCatData() {
    const catImage = document.getElementById('catImage');
    const catFact = document.getElementById('catFact');

    // Endpoint para obtener un hecho aleatorio sobre gatos desde la Cat Facts API
    const factEndpoint = 'https://meowfacts.herokuapp.com/';

    // Endpoint para obtener una imagen aleatoria de gato desde la Cats as a Service (CaaS)
    const imageEndpoint = 'https://cataas.com/cat';

    // Realizar solicitud para obtener el hecho sobre gatos
    fetch(factEndpoint)
        .then(response => response.json())
        .then(data => {
            // Actualizar el texto con el hecho sobre gatos
            catFact.textContent = data.data;

            // Realizar solicitud para obtener la imagen de un gato desde la CaaS
            return fetch(imageEndpoint);
        })
        .then(response => {
            // Actualizar la imagen con la imagen de un gato desde la CaaS
            catImage.src = response.url;
        })
        .catch(error => console.error('Error al obtener datos:', error));
}

// Llamar a la función al cargar la página para mostrar datos iniciales
document.addEventListener('DOMContentLoaded', getCatData);