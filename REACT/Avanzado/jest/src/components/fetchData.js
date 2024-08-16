const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve("Datos recogidos.")
        },1000)
    });
};

module.exports = fetchData;