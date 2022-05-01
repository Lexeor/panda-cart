import React from 'react'
import Table from './Table'
import { Plus } from 'tabler-icons-react';

export default function Order(props) {

    function handleClick() {
        console.log('click');
    }

    function countTotals() {

        const total = props.order.items.map(item => item.sum).reduce((a, b) => a + b, 0);
        const discount = 0;
        const grandTotal = total - discount;
        const prepayment = 0;
        const prepaymentPercent = 100.00;
        const toPay = grandTotal - prepayment;

        return {
            total: total,
            discount: discount,
            grandTotal: grandTotal,
            prepayment: prepayment,
            prepaymentPercent: prepaymentPercent.toFixed(1),
            toPay: toPay.toFixed(2)
        };
    }

    return (
    <div className="order-container">
        <b>Order №{props.order.id}</b>
        <div className="order-header">
            <div className="header-item">
                <div className="footer-label">Поставщик</div>
                <div>{props.order.supplier.name}</div>
            </div>
            <div className="header-item">
                <div className="footer-label">Покупатель</div>
                <div>{props.order.contractor.name}</div>
            </div>
            <div className="header-item">
                <div className="footer-label">Статус</div>
                <span className="status-new">Новый заказ</span>
            </div>
            <div className="header-item--comment">
                <div className="footer-label">Комментарий</div>
                <textarea className="order-textarea" name="Text1" rows="2" defaultValue={props.order.comment} onClick={handleClick}/>
            </div>
        </div>
        <Table key={props.id} items={props.order.items} />
        <div className="btn--add-product noselect"><Plus size={16} color="black" />Добавить товар</div>
        <div className="divider"></div>
        {/* Footer section */}
        <div className="order-footer">
            <div className="footer-item">
                <b>Платёж</b>
                <div className="footer-label">Тип оплаты</div>
                <select id="cars" className="cart-select" name="payment-type" >
                    <option value="foot">Предоплата</option>
                    <option value="auto">Постоплата</option>
                </select>

                <div className="footer-label">Способ оплаты</div>
                <select id="cars" className="cart-select" name="delivery" >
                    <option value="foot">Наличные</option>
                    <option value="auto">Перевод</option>
                    <option value="train">Банк</option>
                    <option value="avia">Пожертвование</option>
                    <option value="teleport">Мы тебя не уничтожим и не переиграем.</option>
                </select>

                <div className="footer-label">Процент предоплаты</div>
                <input value="50" className="cart-input"></input>

                <div className="footer-label">Отсрочка платежа (дни)</div>
                <input value="0" className="cart-input"></input>
            </div>
            <div className="footer-item">
                <b>Поставка</b>
                <div className="footer-label">Способ поставки</div>
                <select id="cars" className="cart-select" name="delivery" >
                    <option value="foot">Пеший курьер</option>
                    <option value="auto">Авто</option>
                    <option value="train">Ж/Д</option>
                    <option value="avia">Авиа</option>
                    <option value="teleport">Телепортация</option>
                </select>
                <div className="footer-label">Адрес поставки</div>
                <textarea className="footer-textarea" name="Text1" rows="2" defaultValue={props.order.delivery_address} onClick={handleClick} />
                <div className="footer-label">Желаемая дата отгрузки</div>
                <input value="Тут datapicker, сейчас лень :)" className="cart-input"></input>
            </div>
            <div className="footer-item">
                <b>Детали</b>
                <div className="footer-label">Грузополучатель</div>
                <select id="cars" className="cart-select" name="receiver" >
                    <option value="res-1">ООО "Ололоша"</option>
                    <option value="res-2">ПАО "Молодость"</option>
                </select>
                <div className="footer-label">Договор</div>
                <select id="cars" className="cart-select" name="contract" >
                    <option value="cont-1">#1</option>
                    <option value="cont-2">#2</option>
                </select>
                <div className="footer-label">Внутренний номер документов покупателя</div>
                <input className="cart-input" type="text" id="country" name="country" defaultValue={props.order.agreement} readOnly />
            </div>
            <div className="footer-item">
                <b>Итого по заказу</b>
                
                <div className="totals-row">
                    <span className="footer-subtotal">Итого</span>
                    <span className="footer-value" style={{float:"right"}}>{props.currency.sign}5547</span>
                </div>
                <div className="totals-row">
                    <span className="footer-label">Скидки</span>
                    <span className="footer-total-value">(20%) - {props.currency.sign}1109.40</span>
                </div>
                <div className="totals-row">
                    <span className="footer-label">Предоплата</span>
                    <span className="footer-total-value">(50%) - {props.currency.sign}2218.8</span>
                </div>
                <div className="divider-dashed"></div>
                <div className="totals-row">
                    <span>Сумма к оплате</span>
                    <span className="footer-grandtotal-value">{props.currency.sign}2218.8</span>
                </div>
                <div className="totals-row vat">
                    <span className="footer-label">В том числе НДС</span>
                    <span className="footer-total-value">{props.currency.sign}443.76</span>
                </div>
            </div>
        </div>
        <div className="divider"></div>
        <div className="order-actions">
            {/* Order actions */}
            <div className="divider"></div>
            <input type="button" class="button-archive" value="Переместить в черновики"></input>
            <input type="button" class="button-remove" value="Очистить корзину"></input>
            <input type="button" class="button-approve" value="Оформить заказ"></input>
        </div>
        <div className="divider-bold"></div>
    </div>
  )
}