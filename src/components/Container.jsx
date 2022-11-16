import React, { useEffect, useState } from 'react';

const Container = () => {

    const [bill, setBill] = useState(null);
    const [tip, setTip] = useState(null);
    const [people, setPeople] = useState(null);
    const [tipAmount, setTipAmount] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);

    useEffect(() => {
        if (bill > 0 && tip > 0 && people > 0) {
          setTipAmount(parseFloat(bill * tip / 100 / people).toFixed(2));
          setTotalAmount(parseFloat((tipAmount * people + bill) / people).toFixed(2));
        }
    
    }, [bill, tip, people, tipAmount, totalAmount]);

    const handleReset = () => {
        setBill(null);
        setTip(null);
        setPeople(null);
        setTipAmount(null);
        setTotalAmount(null);
    };

    return (
        <div className="container">
            <div className="container__box">
                <label htmlFor="Bill" className="container__label">Bill</label>
                <input type="text" placeholder="0" required className="container__input bill" id="Bill" onChange={(e) => setBill(parseFloat(e.target.value))} onKeyPress={(event) => {if (/^[0-9]*\.[0-9]{2}$/.test(event.key)) event.preventDefault()}}></input>
            </div>
            <div className="container__btns">
                <h2 className="container__header">Select Tip %</h2>
                <div className="container__grid">
                    <button className="container__btn" value="5" onClick={(e) => setTip(parseInt(e.target.value))}>5%</button>
                    <button className="container__btn" value="10" onClick={(e) => setTip(parseInt(e.target.value))}>10%</button>
                    <button className="container__btn" value="15" onClick={(e) => setTip(parseInt(e.target.value))}>15%</button>
                    <button className="container__btn" value="25" onClick={(e) => setTip(parseInt(e.target.value))}>25%</button>
                    <button className="container__btn" value="50" onClick={(e) => setTip(parseInt(e.target.value))}>50%</button>
                    <input type="text" className="container__btn input" placeholder="Custom" onChange={(e) => setTip(parseFloat(e.target.value))} onKeyPress={(event) => { if (/^[0-9]*\.[0-9]{2}$/.test(event.key)) event.preventDefault()}}></input>
                </div>
            </div>
            <div className="container__box">
                <label htmlFor="People" className="container__label">Number of People</label>
                <input type="text" placeholder="0" required className="container__input people" id="People" onChange={(e) => setPeople(parseFloat(e.target.value))} onKeyPress={(event) => { if (/^[0-9]*\.[0-9]{2}$/.test(event.key)) event.preventDefault()}}></input>
            </div>
            <div className="container__result">
                <div className="container__amount1">
                    <p className="container__paragraph">Tip Amount<span className="container__span">/ person</span></p>
                    <p className="container__numbers">${tipAmount > 0 ? tipAmount : '0.00'}</p>
                </div>
                <div className="container__amount2">
                    <p className="container__paragraph">Total<span className="container__span">/ person</span></p>
                    <p className="container__numbers">${totalAmount > 0 ? totalAmount : '0.00'}</p>
                </div>
                <div className="container__bottom">
                    <button className="container__reset" onClick={() => handleReset}>RESET</button>
                </div> 
            </div>
        </div>
    );
};

export default Container;