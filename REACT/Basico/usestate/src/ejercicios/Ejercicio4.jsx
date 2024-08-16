import { useState } from 'react';

const Ejercicio4 = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const incremento = (index) => {
    const newCounters = [...counters];
    newCounters[index]++;
    setCounters(newCounters);
  };

  const decremento = (index) => {
    const newCounters = [...counters];
    newCounters[index]--;
    setCounters(newCounters);
  };

  return (
    <div>
      <header>
            <h2>EJERCICIO 4</h2>
        </header>
      {counters.map((count, index) => (
        <div key={index}>
          <p>Contador: {count}</p>
          <button onClick={() => incremento(index)}>+</button>
          <button onClick={() => decremento(index)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default Ejercicio4;
