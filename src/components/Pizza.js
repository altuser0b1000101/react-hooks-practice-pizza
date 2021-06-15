import React from 'react';

function Pizza({ zaList }) {
  return (
    <tr>
      <td>{zaList.topping}</td>
      <td>{zaList.size}</td>
      <td>{zaList.vegetarian ? 'yes' : 'no'}</td>
      <td>
        <button type='button' className='btn btn-primary'>
          // onclick id Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
