import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <div className="flex w-full justify-between p-4 px-8">
      <h1 className="text-2xl">Flow</h1>
      <Link to={"/"}>Clientes</Link>
      <Link to={"/produtos"}>Produtos</Link>
      <Link to={"/pedidos"}>Pedidos</Link>
    </div>
  );
}

export default NavBar;
