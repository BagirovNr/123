import React, { useState } from 'react';

export function AddBank() {

    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [cardExpiration, setCardExpiration] = useState({ month: '', year: '' });
    const [ccv, setCcv] = useState('');

    const handleCardNumberChange = (e, index) => {
        const value = e.target.value;
        if (value.length > 3 && index < 3) {
            document.getElementById(`card-number-${index + 1}`).focus();
        }

        const updatedCardNumber = [...cardNumber];
        updatedCardNumber[index] = value;
        setCardNumber(updatedCardNumber.join(' '));
    };

    const handleCardHolderChange = (e) => {
        setCardHolder(e.target.value);
    };

    const handleCardExpirationChange = (e) => {
        const { id, value } = e.target;
        setCardExpiration((prev) => ({ ...prev, [id]: value }));
    };

    const handleCcvChange = (e) => {
        setCcv(e.target.value);
    };

    return (
        <div className="checkout">
            {/* ... other code ... */}
            <form className="form" autoComplete="off" noValidate>
                <fieldset>
                    <label htmlFor="card-number">Card Number</label>
                    {[0, 1, 2, 3].map((index) => (
                        <input
                            key={index}
                            type="number"
                            id={`card-number-${index}`}
                            className="input-cart-number"
                            maxLength="4"
                            onChange={(e) => handleCardNumberChange(e, index)}
                        />
                    ))}
                </fieldset>
                <fieldset>
                    <label htmlFor="card-holder">Card holder</label>
                    <input
                        type="text"
                        id="card-holder"
                        onChange={handleCardHolderChange}
                    />
                </fieldset>
                <fieldset className="fieldset-expiration">
                    <label htmlFor="card-expiration-month">Expiration date</label>
                    <div className="select">
                        <select
                            id="card-expiration-month"
                            onChange={handleCardExpirationChange}
                        >
                            {/* ... options ... */}
                        </select>
                    </div>
                    <div className="select">
                        <select
                            id="card-expiration-year"
                            onChange={handleCardExpirationChange}
                        >
                            {/* ... options ... */}
                        </select>
                    </div>
                </fieldset>
                <fieldset className="fieldset-ccv">
                    <label htmlFor="card-ccv">CCV</label>
                    <input
                        type="text"
                        id="card-ccv"
                        maxLength="3"
                        onFocus={() => document.querySelector('.credit-card-box').classList.add('hover')}
                        onBlur={() => document.querySelector('.credit-card-box').classList.remove('hover')}
                        onChange={handleCcvChange}
                    />
                </fieldset>
                <button className="btn">
                    <i className="fa fa-lock"></i> submit
                </button>
            </form>
        </div>
    );
};

