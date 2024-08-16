import { useState } from 'react'

const Ejercicio1 = () => {
    const [value, setValue] = useState(0);

  return (
    <div>
        <header>
            <h2>EJERCICIO 1</h2>
        </header>
        <section>
            <button onClick={() => {setValue(value + 1)}}>+</button>
            <p>Valor: {value}</p>
            <button onClick={() => {setValue(value - 1)}}>-</button>
        </section>
    </div>
  )
}

export default Ejercicio1