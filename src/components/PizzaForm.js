import React, { useState } from 'react';

function PizzaForm() {
  const [zaForm, setZaForm] = useState('');
  const [zaDrop, setZaDrop] = useState('');
  const [zaVeg, setZaVeg] = useState('');
  console.log(zaVeg);

  return (
    <form onSubmit={null /*handle that submit*/}>
      <div className='form-row'>
        <div className='col-5'>
          <input
            className='form-control'
            type='text'
            name='topping'
            placeholder='Pizza Topping'
            value={zaForm}
            onChange={(e) => setZaForm(e.target.value)}
          />
        </div>
        <div className='col'>
          <select
            className='form-control'
            name='size'
            onChange={(e) => {
              const selectZaSize = e.target.value;
              setZaDrop(selectZaSize);
            }}
          >
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
          </select>
        </div>
        <div className='col'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='vegetarian'
              value='Vegetarian'
              onChange={(e) => {
                const selectVeg = e.target.value;
                setZaVeg(selectVeg);
              }}
            />
            <label className='form-check-label'>Vegetarian</label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='vegetarian'
              value='Not Vegetarian'
              onChange={(e) => {
                const selectVeg = e.target.value;
                setZaVeg(selectVeg);
              }}
            />
            <label className='form-check-label'>Not Vegetarian</label>
          </div>
        </div>
        <div className='col'>
          <button type='submit' className='btn btn-success'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
