import React, { useState } from 'react';

const Ejercicio4 = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== "") {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea(""); 
    }
  };


  return (
    <div>
      <header>
        <h3>EJERCICIO 4</h3>
      </header>
      <section>
        <div>
          <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Nueva tarea"
          />
          <button onClick={agregarTarea}>Agregar</button>
        </div>
        <div>
          <h4>LISTA DE TAREAS</h4>
          <ul>
            {tareas.map((tarea, index) => (
              <li key={index}>{tarea}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Ejercicio4;
