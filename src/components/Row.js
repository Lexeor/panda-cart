import React from 'react';
import { X, Heart } from 'tabler-icons-react';
import ModalOverlay from './ModalOverlay';

function Row(props) {
    const data = props.rowData;

  function handleClick(id) {
    console.log('click');
  }

  return (
    <tr className="table--row">
        <ModalOverlay handleClick={handleClick} />
        <td className="td--center">{data.id}</td>
        <td className="td--center">{data.code}</td>
        <td>
          <div className="td--name">
            <div>
              {data.name}
            </div>
            <div className="td--links">
              <Heart size={16} strokeWidth={4} style={{cursor:'pointer'}} />В избранное
              <X size={16} strokeWidth={4} color={'#9A1B26'} onClick={handleClick} style={{cursor:'pointer'}}/>Удалить
            </div>
          </div>
        </td>
        <td>{data.properties}</td>
        <td>{data.count}</td>
        <td className="td--right">{data.full_count}</td>
        <td className="td--right">{data.measure_unit}</td>
        <td className="td--right">{data.volume}</td>
        <td className="td--right">{data.weight}</td>
        <td className="td--right">{data.weight_gross}</td>
        <td className="td--right">{data.price}</td>
        <td className="td--right">{data.sum}</td>
    </tr>
  )
}

export default Row