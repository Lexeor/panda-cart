import React from 'react'
import Row from './Row'

export default function Table(props) {

    const rows = props.items.map(item => {
        return <Row key={item.id} rowData={item} />
    });

  return (
    <div>
        <table>
            <thead>
                <tr className="table--header">
                    <th>№</th>
                    <th>Артикул</th>
                    <th>Наименование</th>
                    <th>Модификация</th>
                    <th>Кол-во упаковок</th>
                    <th>Кол-во ед. из.</th>
                    <th>Ед. из.</th>
                    <th>м<span>3</span></th>
                    <th>Нетто, кг</th>
                    <th>Брутто, кг</th>
                    <th>Цена</th>
                    <th>Сумма</th>
                </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
            <tfoot>
                <tr className="table--totals">
                    <td colSpan="4">Total</td>
                    <td>15</td>
                    <td>200</td>
                    <td></td>
                    <td>30</td>
                    <td>30</td>
                    <td>3</td>
                    <td colSpan="2">30</td>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}