    import * as express from 'express' ;

    const app = express ();
    const port = 3000;
    const bsm = 'Trabalho em equipe, atenção aos detalhes, proatividade, comunicação, persistência, responsabilidade pessoal, orientação ao futuro e mentalidade de crescimento '

    app.get('/', (request, response) => {
        response.send('Hello world!');
    });

    app.get('/bsms', (request, response) => {
        response.send(`Lista de BSMs: ${bsm}`);
    })

    app.get('/objetivos', (request, response) => {
        response.send('Meus objetivos de aprendizagem são: MySQL e Criar servidores')
    })

    // Código aqui

    app.listen(port, () => {
        console.log(`Server is running ate port ${port}!`);
    });