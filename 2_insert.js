const db = require('./_database')

async function insertData(){
    await db.connect()

    const queryEvento = 'INSERT INTO evento (nome) VALUES ($1)'

    await db.query(queryEvento, ['Encontro de node'])
    await db.query(queryEvento, ['Encontro de python'])

    const queryParticipantes = 'INSERT INTO participante (nome) VALUES ($1)'

    await db.query(queryParticipantes, ['Raniery'])
    await db.query(queryParticipantes, ['José'])
    await db.query(queryParticipantes, ['Maria'])
    await db.query(queryParticipantes, ['Michele'])

    const queryEventoParticipantes = 'INSERT INTO evento_participante VALUES($1, $2)'

    await db.query(queryEventoParticipantes, [1,1])
    await db.query(queryEventoParticipantes, [1,2])
    await db.query(queryEventoParticipantes, [1,3])
    await db.query(queryEventoParticipantes, [2,4])

    await db.end()

    console.log('Dados inseridos com sucesso!')    
}

insertData()