import React from 'react'

const Ejercicio3 = () => {

    const personajes = [
        {
          nombre: "Pinocho",
          fechaDeCreacion: "1940-02-07", 
          peliculas: ["Pinocho"], 
          datosInteresantes: [
            "Pinocho es un títere de madera que cobra vida.",
            "Es conocido por su nariz que crece cuando miente."
          ]
        },
        {
          nombre: "Simba",
          fechaDeCreacion: "1994-06-24", 
          peliculas: ["El Rey León", "El Rey León II: El Tesoro de Simba"],
          datosInteresantes: [
            "Simba es el hijo del Rey Mufasa y se convierte en el rey de la Sabana.",
            "Su nombre significa 'león' en suajili."
          ]
        },
        {
          nombre: "Aladdin",
          fechaDeCreacion: "1992-11-25", 
          peliculas: ["Aladdin", "Aladdin y el Rey de los Ladrones", "Aladdin: El Regreso de Jafar"],
          datosInteresantes: [
            "Aladdin es un joven que encuentra una lámpara mágica con un genio dentro.",
            "Su historia se basa en un cuento de 'Las mil y una noches'."
          ]
        },
        {
          nombre: "Blancanieves",
          fechaDeCreacion: "1937-12-21", 
          peliculas: ["Blancanieves y los siete enanitos"],
          datosInteresantes: [
            "Blancanieves es la primera princesa de Disney.",
            "Es conocida por su amistad con los siete enanitos."
          ]
        },
        {
          nombre: "Mickey",
          fechaDeCreacion: "1928-11-18", 
          peliculas: ["Fantasia", "Mickey's Once Upon a Christmas", "The Wonderful Mickey Mouse"],
          datosInteresantes: [
            "Mickey Mouse es el personaje icónico de Disney y su mascota oficial.",
            "Su primera aparición fue en el cortometraje 'Steamboat Willie'."
          ]
        }
      ];
      
  return (
    <div>
        <header>
            <h3>EJERCICIO 3</h3>
        </header>
        <section>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Fecha Creación Personaje</th>
                    <th>Películas</th>
                    <th>Datos Interesantes</th>
                </tr>
                {personajes.map((personaje, index) => (
                    <tr key={index}>
                        <td>{personaje.nombre}</td>
                        <td>{personaje.fechaDeCreacion}</td>
                        <td>{personaje.peliculas}</td>
                        <td>
                            <ul>
                            {personaje.peliculas.map((pelicula, index) => (
                                <li key={index}>{pelicula}</li>
                            ))}
                            </ul>
                        </td>
                        <td>
                        <ul>
                            {personaje.datosInteresantes.map((dato, index) => (
                                <li key={index}>{dato}</li>
                            ))}
                        </ul>
                        </td>
                    </tr>
                ))}
            </table>
        </section>
    </div>
  )
}

export default Ejercicio3