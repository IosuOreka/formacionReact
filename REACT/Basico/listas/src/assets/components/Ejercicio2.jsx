import React from 'react'

const Ejercicio2 = () => {

    const personajes = ["Pinocho", "Simba", "Aladdin", "Blancanieves", "Mickey"];
  
    return (
    <div>
        <header>
            <h3>EJERCICIO 2</h3>
        </header>
        <section>
            <ul>
                {personajes.map((personaje, index) => (
                    <li key={index}>{personaje}</li>
                ))}
            </ul>
        </section>
    </div>
  )
}

export default Ejercicio2