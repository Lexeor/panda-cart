import React from 'react'

export default function OrderList(props) {

  console.log(props.data.orders);

  const orderListItems = props.data.orders.map(order => (
    <div className="order-list--item" key={order.id}>
      Заказ №{order.id} <span style={{float: "right"}}>{order.total} {props.data.currency.sign}</span>
    </div>
  )) 

  return (
    <div className="order-list">
        <input type="button" className="gray-botton" value="Скачать шаблон" />
        <input type="button" className="gray-botton" value="Загрузить из файла" />
        <div><h3>Заказы в корзине:</h3></div>
        {orderListItems}
    </div>
  )
}