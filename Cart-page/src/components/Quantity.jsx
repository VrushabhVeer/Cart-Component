import React from 'react'

const Quantity = ({qty, changeCount, id}) => {
  return (
    <div className='quntity'>
        <button onClick={()=>changeCount(id, +1)} type="button" class="btn btn-secondary">+</button>
        <div className='qty'>
            <p>{qty}</p>
        </div>
        <button disabled={qty === 0} onClick={()=>changeCount(id, -1)} type="button" class="btn btn-secondary">-</button>
    </div>
  )
}

export default Quantity;