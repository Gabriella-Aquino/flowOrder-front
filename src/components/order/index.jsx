import React, { useState } from "react";
import { Link } from "react-router-dom";
import OrderItem from "../order-item.jsx";

function Order({ productOrderId, clientId, status }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="flex w-full p-3 justify-between">
      <div>id do pedido: {productOrderId}</div>
      <div
        onClick={() => setModalIsOpen(!modalIsOpen)}
        className="px-2 text-[#646cff] font-medium cursor-pointer"
      >
        Ver
      </div>
      {modalIsOpen && (<OrderItem productOrderId={productOrderId}/>)}
    </div>
  );
}

export default Order;
