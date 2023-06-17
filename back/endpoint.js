const express = require('express');
const sqlite3 = require('sqlite3').verbose();  
const DBPATH = 'ojogo.db';
const app = express();
const port = 9000;
const db = new sqlite3.Database((DBPATH), (err) => {
if (err){
	console.error(err.message);
} else{
	console.log('Tudo certo, chefe ;) ');
}});
   
app.use(express.static("../front/"));
app.use(express.json());

// nmantem o servidor on fire
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
	});

// chamada post do nome do usuario e geração do id dele e buscar playe
app.post('/inserir-nome', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const insert = 'INSERT INTO player (nome) VALUES (?)';
	db.run(insert, [req.body.nome], function(err) {
		if (err) {
			console.error(err.message);
			res.status(500).json({ error: 'Vish, não rolou não' });
		} else {
			const playerId = this.lastID; // ramazena o id do jogador inserido
			res.status(201).json({ message: 'Dentro', playerId: playerId });
		}
	});
});
	
// chamada get do id do jogador adversario 
app.get('/players', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const playerId = req.query.playerId; // obtém o id do jogador atual
	const getOpponents = 'SELECT id FROM player WHERE id != ?';
	db.all(getOpponents, [playerId], (err, rows) => {
		if (err) {
			console.error(err.message);
			res.status(500).json({ error: 'Erro ao obter jogadores' });
		} else {
			res.json(rows);
		}
	});
});
	

