import express from 'express';
import cors from 'cors';

module.exports = () => {
    const app = express();
    
    app.set('port', 3001);
    app.use(cors());

    require('./api/controllers/index')(app);

    app.get('*', (req, res) => {
        res.status(404).send({
            message: "Endpoint não encontrado"
        });
    });

    return app;
};