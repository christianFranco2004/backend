// el archivo app.js es el archivo de ejecucion de nuestro aplicativo web
//aca vas a configurar nuestro servidor con express y vamos a gestionar todo lo relacionado con la logica de negocio-> conexion bas de dartos, peticiones, resppuestas

//1. importar las dependecias y los modulos que necesitamos
import express from "express";//ECMAS6


//2. CONFIGURAR EL USO DE NUESTRO SERVIDOR
const app = express();
const port = 3000;//6000, 9000


//3. ejecutar el servidor en nuestro computador
app.listen(port, () =>{
    console.log("El servidor esta ejecutandose correctamente, en el puerto ",port);
});