const db = require('./_database')

async function deleteData(){
    await db.connect()

    await db.query("DELETE FROM evento_participante WHERE participante_id = 1;")

    await db.end()

    console.log('Registro excluido com sucesso!')
}

deleteData()