    import React, { useState } from "react";
    import Cards from "react-credit-cards";
    import "react-credit-cards/es/styles-compiled.css";
    import creditCard from '../creditCard/creditCard.module.scss'

    const CreditCard = () => {
        const [number, SetNumber] = useState("");
        const [name, SetName] = useState("");
        const [date, SetDate] = useState("");
        const [cvc, SetCvc] = useState("");
        const [focus, SetFocus] = useState("");
    
        const handleNumberChange = (e) => {
            const inputNumberValue = e.target.value;
    
            if (inputNumberValue === '' || /^\d+$/.test(inputNumberValue)) {
                if (inputNumberValue.length <= 16) {
                    SetNumber(inputNumberValue);
                }
            }
        }
    
        const handleDateChange = (e) => {
            const inputDateValue = e.target.value;
    
            if (inputDateValue === '' || /^\d+$/.test(inputDateValue)) {
                if (inputDateValue.length <= 4) {
                    SetDate(inputDateValue);
                }
            }
        }
    
        const handleCvcChange = (e) => {
            const inputCvcValue = e.target.value;
    
            if (inputCvcValue === '' || /^\d+$/.test(inputCvcValue)) {
                if (inputCvcValue.length <= 3) {
                    SetCvc(inputCvcValue);
                }
            }
        }
    
        return (
            <>
                <h1>
                    <span>With us:</span>
                    <div className={creditCard.message}>
                        <div className={creditCard.word1}>Safe</div>
                        <div className={creditCard.word2}>fast</div>
                        <div className={creditCard.word3}>convenient</div>
                    </div>
                </h1>
    
                <section className={creditCard.upContainer}>
                    <div className={creditCard.unknown}>
                        <Cards
                            className={creditCard.creditCart}
                            style={{ width: '1000px' }}
                            number={number}
                            name={name}
                            expiry={date}
                            cvc={cvc}
                            focused={focus}
                        />
                    </div>

                    <form className={creditCard.container}>
                        <div className={creditCard.row}>
                            <div className={creditCard.information}>
                                <label className={creditCard.waviy} htmlFor="name">
                                    <span style={{ "--i": 1 }}>n</span>
                                    <span style={{ "--i": 2 }}>u</span>
                                    <span style={{ "--i": 3 }}>m</span>
                                    <span style={{ "--i": 4 }}>b</span>
                                    <span style={{ "--i": 5 }}>e</span>
                                    <span style={{ "--i": 6 }}>r</span>
                                    <span style={{ "--i": 7 }}>:</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={number}
                                    name="number"
                                    onChange={handleNumberChange}
                                    onFocus={(e) => SetFocus(e.target.name)}
                                ></input>
                            </div>
                        </div>
                        <div className={creditCard.row}>
                            <div className={creditCard.information}>
                                <label className={creditCard.waviy} htmlFor="name">
                                    <span style={{ "--i": 1 }}>n</span>
                                    <span style={{ "--i": 2 }}>a</span>
                                    <span style={{ "--i": 3 }}>m</span>
                                    <span style={{ "--i": 4 }}>e</span>
                                    <span style={{ "--i": 5 }}>:</span>

                                </label>
                                <input style={{ marginLeft: "26px" }}
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    name="name"
                                    onChange={(e) => {
                                        SetName(e.target.value);
                                    }}
                                    onFocus={(e) => SetFocus(e.target.name)}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className={creditCard.waviy} htmlFor="name">
                                    <span style={{ "--i": 1 }}>d</span>
                                    <span style={{ "--i": 2 }}>a</span>
                                    <span style={{ "--i": 3 }}>t</span>
                                    <span style={{ "--i": 4 }}>e</span>
                                    <span style={{ "--i": 5 }}>:</span>
                                </label>
                                <input style={{ marginLeft: '31px' }}
                                    type="text"
                                    name="expiry"
                                    className="form-control"
                                    value={date}
                                    onChange={handleDateChange}
                                    onFocus={(e) => SetFocus(e.target.name)}
                                ></input>
                            </div>
                            <div className="col-sm-5">
                                <label htmlFor="name"> <label className={creditCard.waviy} htmlFor="name">
                                    <span style={{ "--i": 1 }}>C</span>
                                    <span style={{ "--i": 2 }}>V</span>
                                    <span style={{ "--i": 3 }}>V</span>
                                    <span style={{ "--i": 4 }}>:</span>
                                </label></label>
                                <input style={{ marginLeft: '42px' }}
                                    type="tel"
                                    name="cvc"
                                    className="card"
                                    value={cvc}
                                    onChange={handleCvcChange}
                                    onFocus={(e) => SetFocus(e.target.name)}
                                ></input>
                            </div>
                        </div>
                        <div>
                            <input type="submit" name="save" id="save" value="Save" onClick={(e) => e.preventDefault()} />
                        </div>
                    </form>
                </section>
            </>
        );
    };
    export default CreditCard;
