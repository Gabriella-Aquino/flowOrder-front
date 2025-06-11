import { fetchClient, fetchOrder, fetchProductOrder } from "@/lib/axios";
import React, { useEffect, useState } from "react";

function OrderItem({ productOrderId }) {
  const [order, setOrder] = useState();
  const [client, setClient] = useState();
  const [product, setProduct] = useState();
  const [productOrder, setProductOrder] = useState();

  useEffect(() => {
    fetchProductOrder(productOrderId).then((data) => setProductOrder(data))
  },[])

  useEffect(() => {
    if(productOrder?.order_id){
      fetchOrder(productOrder.order_id).then((data) => setOrder(data));
    }
  }, [productOrder]);

  useEffect(() => {
    if (order?.client_id) {
      fetchClient(order.client_id).then((data) => setClient(data));
    }
  }, [order]);

  console.log("order: ", order);
  console.log("client: ", client);

  return (
    <div className="absolute flex flex-col w-[40%] p-5 items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-400 rounded-lg gap-5">
      <h3 className="text-xl font-bold">Pedido --- {productOrderId}</h3>
      {order && client && (
        <div className="w-full space-y-5">
          <div className="w-full">
            <h3 className="text-lg font-bold">Cliente: </h3>
            <div>
              <span className="font-bold">Nome: </span>
              {client.name}
            </div>
            <div>
              <span className="font-bold">E-mail: </span>
              {client.email}
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-lg font-bold">Produto: </h3>
            <div>
              <span className="font-bold">Nome: </span>
              {client.name}
            </div>
            <div>
              <span className="font-bold">E-mail: </span>
              {client.email}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderItem;
