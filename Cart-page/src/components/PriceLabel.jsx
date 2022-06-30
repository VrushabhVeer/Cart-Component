import React from 'react'

const PriceLabel = ({ label, price }) => {
    return (
        <div className='priceLabel'>
            <p className='label'>{label}</p>
            <p>Price ₹. {price}</p>
        </div>
    )
}

export default PriceLabel;