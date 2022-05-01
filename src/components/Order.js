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
        <div className="order-details">
            <div className="entities">
                <b>Поставщик</b><span>{props.order.supplier.name}</span><br />
                <b>Покупатель</b><span>{props.order.contractor.name}</span><br />
            </div>
            <div className="delivery-details">
                <p><span>Комментарий</span><textarea name="Text1" rows="2" defaultValue={props.order.comment} onClick={handleClick}/></p>
                <p><span>Адрес поставки</span><textarea name="Text1" rows="2" defaultValue={props.order.delivery_address} onClick={handleClick} /></p>
                <p><span>Договор №</span><input type="text" id="country" name="country" defaultValue={props.order.agreement} readOnly /></p>
            </div>
        </div>
        <Table key={props.id} items={props.order.items} />
        <div className="btn--add-product noselect"><Plus size={16} color="black" />Добавить товар</div>
        <div className="divider"></div>
        <div className="order-footer">
            {/* Filters section */}
            <div className="filters">
                Filters
            </div>
            {/* Totals section */}
            <div className="totals">
                <div className="totals-row">
                    <span className="span-text">Итого</span>
                    <span className="span-currency">{props.currency.sign}</span>
                    {countTotals().total}
                </div>
                <div className="totals-row">
                    <span className="span-text green">Скидки</span>
                    <span className="span-currency">{props.currency.sign}</span>
                    {countTotals().discount}
                </div>
                <div className="totals-row">
                    <span className="span-text">Общий итог</span>
                    <span className="span-currency">{props.currency.sign}</span>
                    {countTotals().grandTotal}
                </div>
                <div className="totals-row">
                    <span className="span-text">Предоплата <span className="span-persent">{countTotals().prepaymentPercent}%</span></span>
                    <span className="span-currency">{props.currency.sign}</span>
                    
                    {countTotals().prepayment}
                </div>
                <div className="totals-row">
                    <span className="span-text">Сумма оплаты</span>
                    <span className="span-currency">{props.currency.sign}</span>
                    {countTotals().toPay}
                </div>
            </div>
        </div>
    </div>
  )
}