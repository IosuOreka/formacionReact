import { useState } from 'react'

const Ejercicio2 = () => {
    const [value, setValue] = useState(0);
    const [initialValue, setInitialValue] = useState(0);

  return (
    <div>
        <header>
            <h2>EJERCICIO 2</h2>
        </header>
        <section>
         
            <input type='number' value={initialValue} onChange={(e) => {setInitialValue(Number(e.target.value))}}></input>
            <button onClick={() => {setValue(Number(initialValue))}}>Determinar valor inicial</button>
            <br></br>
            <button onClick={() => {setValue(value + 1)}}>+</button>
            <p>Valor: {value}</p>
            <button onClick={() => {setValue(value - 1)}}>-</button>
        </section>
    </div>
  )
}

export default Ejercicio2