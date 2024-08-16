import React, {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

  return (
    <div>
        <p>Contador: {count}</p>
        <button onClick={() => {setCount(count + 1)}}>Sumar</button>
    </div>
  )
}

export default Counter