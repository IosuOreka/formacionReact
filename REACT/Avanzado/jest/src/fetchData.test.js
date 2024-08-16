const  fetchData  = require('./components/fetchData');

test('Se recogen datos de la petición', async () => { 
    const data = await fetchData();
    expect(data).toBe('Datos recogidos.') ;
})