fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('content').innerText = data.message;
    })
    .catch(error => console.error('Erreur lors du chargement du JSON', error));