import React, { useState } from 'react'

const Ejercicio1 = () => {

    const [lista, setLista] = useState(["manzana", "pera", "melocotón", "melón"]);

  return (
    <div>
        <header>
            <h3>EJERCICIO 1 - LISTA SENCILLA</h3>
        </header>
        <section>
            <ul>
                {lista.map((elemento, index) =>(
                    <li key={index}>{elemento}</li>
                ))}
            </ul>
        </section>
    </div>
  )
}

export default Ejercicio1