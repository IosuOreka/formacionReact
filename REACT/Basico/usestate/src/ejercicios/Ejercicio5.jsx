import React, { useState } from 'react';

const Ejercicio5 = () => {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState([]);

    const handleSuma = () => {
        const newHistory = [...history];
        const positive = `${count} + 1`;
        newHistory.push(positive);
        setHistory(newHistory);
        setCount(count + 1);
    };
  
    const handleResta = () => {
        const newHistory = [...history];
        const negative = `${count} - 1`;
        newHistory.push(negative);
        setHistory(newHistory);
        setCount(count - 1);
    };
  
    return (
        <div>
            <header>
                <h2>EJERCICIO 5</h2>
            </header>
            <section>
                <button onClick={handleSuma}>+</button>
                <p>{count}</p>
                <button onClick={handleResta}>-</button>
            </section>
            <section>
                <header>
                    <h6>HISTORIAL CAMBIOS</h6>
                </header>
                <ul>
                    {history.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Ejercicio5;
