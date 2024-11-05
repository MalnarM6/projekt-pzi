//kreirati vlastite GET, POST, PUT, DELETE metode za rad s objektom unutar vlastitog projekta
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/knjige', (request, response) => {
    return response.send('Popis knjiga');
    });

    app.post('/addknjiga', (request, response) => {
        const data = request.body;
        const naslov = data.naslov;
        const autor = data.autor;
        const god_izdanja = data.god_izdanja;
        const izdavac = data.izdavac;

        return response.send('Dodavanje knjige '+naslov+" "+autor+" "+god_izdanja+" "+izdavac);
    });
    app.put('/updateknjiga', (request, response) => {
        const data = request.body;
        console.log(data.knjiga);
        return response.send('PUT metoda -> Azuriranje knjige '+data.knjiga);
    });
    app.delete('/deleteknjiga', (request, response) => {
        const data = request.body;
        console.log('Delete '+data.knjiga);
        return response.send('Brisanje knjige '+data.knjiga);
    });




app.listen(3000, () => {
    console.log("Server running on port 3000");
    });