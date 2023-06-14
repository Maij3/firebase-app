import React, { useState } from "react";

const elementos = [
  {
    id: "LByfE3mb0cU7NZpoKsYiqaJeJrt1",
    role: "guest",
    email: "example@example.com",
  },
  {
    id: "dAvuBWRlxCOpUv44HoFOOebieys2",
    role: "guest",
    email: "nanda@example.com",
  },
  { id: "null", role: "guest", email: null },
  {
    id: "LByfE3mb0cU7NZpoKsYiqaJeJrt1",
    role: "guest",
    email: "example@example.com",
  },
  {
    id: "dAvuBWRlxCOpUv44HoFOOebieys2",
    role: "guest",
    email: "nanda@example.com",
  },
  { id: "null", role: "guest", email: null },
  {
    id: "LByfE3mb0cU7NZpoKsYiqaJeJrt1",
    role: "guest",
    email: "example@example.com",
  },
  {
    id: "dAvuBWRlxCOpUv44HoFOOebieys2",
    role: "guest",
    email: "nanda@example.com",
  },
  { id: "null", role: "guest", email: null },
  {
    id: "LByfE3mb0cU7NZpoKsYiqaJeJrt1",
    role: "guest",
    email: "example@example.com",
  },
  {
    id: "dAvuBWRlxCOpUv44HoFOOebieys2",
    role: "guest",
    email: "nanda@example.com",
  },
  { id: "null", role: "guest", email: null },
];

const elementosPorPagina = 5;

const Paginator = () => {
  const [paginaActual, setPaginaActual] = useState(1);

  const indiceInicial = (paginaActual - 1) * elementosPorPagina;
  const indiceFinal = indiceInicial + elementosPorPagina;

  const elementosPagina = elementos.slice(indiceInicial, indiceFinal);

  const handleClickPagina = (pagina: any) => {
    setPaginaActual(pagina);
  };

  return (
    <div>
      {elementosPagina.map((elemento) => (
        <div key={elemento.id}>
          <p>ID: {elemento.id}</p>
          <p>Role: {elemento.role}</p>
          <p>Email: {elemento.email}</p>
        </div>
      ))}

      <div>
        {Array.from(
          { length: Math.ceil(elementos.length / elementosPorPagina) },
          (_, index) => (
            <button key={index} onClick={() => handleClickPagina(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Paginator;
