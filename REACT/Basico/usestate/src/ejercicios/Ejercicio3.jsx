import { useState } from 'react'

const Ejercicio3 = () => {
    const [value, setValue] = useState(0);
    const [initialValue, setInitialValue] = useState(0);
    
    const handleReset = () => {
        setInitialValue(0);
        setValue(0);
    }

  return (
    <div>
        <header>
            <h2>EJERCICIO 3</h2>
        </header>
        <section>
         
            <input type='number' value={initialValue} onChange={(e) => {setInitialValue(Number(e.target.value))}}></input>
            <button onClick={() => {setValue(Number(initialValue))}}>Determinar valor inicial</button>
            <br></br>
            <button onClick={() => {setValue(value + 1)}}>+</button>
            <p>Valor: {value}</p>
            <button onClick={() => {setValue(value - 1)}}>-</button>
            <br></br>
            <button onClick={handleReset}>RESET</button>
        </section>
    </div>
  )
}

export default Ejercicio3