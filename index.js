const {
    pool
} = require("./dataBase.js");

// const insertUser = async() => {
//     const [email,firstname,lastname,age] = process.argv.slice(2);
//     try{
//         const res = await pool.query(
//             "INSERT INTO usuarios(email,firstname,lastname,age) values($1,$2,$3,$4)",
//             [email,firstname,lastname,age]
//         );
//         console.log(`Se ha agregado el usuario ${firstname}`);

//     }catch(error){
//         console.error(error);
//     }
// }
//insertUser();

// const getAllUsers = async() => {
//     try{
//         const res = await pool.query("SELECT * FROM usuarios");
//         console.table(res.rows);
//     }catch(error){
//         console.error(error);
//     }
// }

// getAllUsers();

// const modifyUser = async() => {
//     const [id,email] = process.argv.slice(2);
//     try{
//         const res = await pool.query("UPDATE usuarios SET email = $1 WHERE id= $2",[email,id]);
//         console.log(`Se han actualizado el usuario ${id} con el nuevo correo ${email}`);
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// modifyUser()

const deleteUser = async() => {
    const [id] = process.argv.slice(2);
    try{

        const res = await pool.query("DELETE FROM usuarios WHERE id = ${1}",[id]);
        console.log(`Se ha eliminado correctamente el usuario con id: ${id}`);

    }catch(error){
        console.error(error);
    }
}