const fecha = (req, res, next) => {
    console.log("Kiubo");
    
    const fecha = new Date().toLocaleString(); 
    console.log("Fecha y hora: ${fecha}"); 
    next(); 
};

const mnsj = (req, res, next) => {
    console.log("Mensajeee"); 
    next(); 
};

module.exports = {
    fecha,
    mnsj
};
