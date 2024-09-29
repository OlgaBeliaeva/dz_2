
import React from 'react';
import Greeting from './Greeting';
import ShoppingList from './ShoppingList';
import OrderStatus from './OrderStatus';

function App() {
 //  массива товаров
 const items = [
  'Яблоки',
  'Бананы',
  'Груши',
  'Апельсины',
  'Киви',
  'Мандарины',
  'Виноград',
  'Персики',
  'Арбузы',
  'Клубника',
];
 //массива заказов
 const orders = [
  { orderId: 123, status: 'в пути' },
  { orderId: 124, status: 'доставлен' },
  { orderId: 125, status: 'отменен' },
  { orderId: 126, status: 'обрабатывается' },
  { orderId: 127, status: 'в пути' },
];
  return (
    <div >
     <div className="App">
     <h2>Задача 1: Компонент Приветствия</h2>
      <Greeting name="Андрей" />
      <h2>Задача 2: Компонент Списка Покупок</h2>
      <ShoppingList items={items} />
      <h2>Задача 3: Компонент Статуса Заказа</h2>
      {orders.map(order => (
        <OrderStatus key={order.orderId} orderId={order.orderId} status={order.status} />
      ))}
    </div>
    </div>
  );
}

export default App;
