import React from 'react'
import './App.css';
import Order from './components/Order'
import Table from './components/Table'
import rawData from './data.json'
import OrderList from './components/OrderList'

export default function App() {
  const [orders, setOrders] = React.useState(rawData.orders);

  const orderItems = orders.map(order => (
    <Order 
        key={order.id} 
        order={order}
        currency={rawData.currency}
    />
  )) 

  return (
    <div className="App">
      <OrderList data={rawData}/>
      <div className="cart-container">
        {/* <div className="warning">Внимание, цены в корзине пересчитываются бла-бла-бла...</div> */}
        <div className="page-title">Корзина</div>
        <div className="orders-container">
          {orderItems}
        </div>
      </div>
    </div>
  );
}
