import Client from "@/components/cliente";
import { fetchClients } from "@/lib/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients()
      .then((data) => setClients(data))
      .catch((error) => {
        console.error("Erro ao buscar clientes:", error);
      });
  }, []);


  return (
    <div className="w-[90%] mx-auto mt-10">
      <div className="flex w-full justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">Clientes</h2>
        <Link to={"/cliente/create/"} className="border border-gray-400 rounded-lg p-1">Adicionar</Link>
      </div>
      <div className="flex flex-col justify-start items-center border border-gray-400 rounded-lg min-h-[50vh]">
        {clients &&
          clients.map((client) => (
            <Client key={client.id} name={client.name} email={client.email} />
          ))}
      </div>
    </div>
  );
}

export default Home;
