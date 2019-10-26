const db = require('./_database')

async function updateData(){
    await db.connect()
    await db.query("UPDATE participante SET nome = 'Maria Alice' WHERE id = 3;") //o update só funciona com aspas duplas
    await db.end()

    console.log('Alteração feita com sucesso!')
}

updateData()