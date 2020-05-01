import React from 'react';

const Balance = (props) => {
    const {transactions} = props;
    const total = transactions.reduce((a, b) => a + b.amount, 0);

    return (
        <div className='balance-border'>
            <div className='balance'>Balance</div>
            <p>{`$${total}`}</p>
        </div>
    );
};

export default Balance;
