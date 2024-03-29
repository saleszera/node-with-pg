const db = require('./_database')

async function createTable(){

    await db.connect()
    await db.query('CREATE TABLE evento(id serial PRIMARY KEY, nome VARCHAR (50) UNIQUE NOT NULL)')
    await db.query('CREATE TABLE participante (id serial PRIMARY KEY, nome VARCHAR(50) UNIQUE NOT NULL)')
    await db.query('CREATE TABLE evento_participante(evento_id INTEGER NOT NULL, participante_id INTEGER NOT NULL, PRIMARY KEY (evento_id, participante_id), FOREIGN KEY(evento_id) REFERENCES evento (id), FOREIGN KEY (participante_id) REFERENCES participante (id))')
    await db.end()

    console.log('Tabela criada')
}

createTable()