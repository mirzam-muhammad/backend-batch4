const pool = require('./db')

async function testConnection() {
    try {
        const res = await pool.query("SELECT NOW()")
        console.log(`Koneksi Berhasil`, res.rows[0].now)
    } catch (error) {
        console.log(`Koneksi gagal`, error.message)
    } finally {
        await pool.end()
    }
}

testConnection()