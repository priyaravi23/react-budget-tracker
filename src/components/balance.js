import React from 'react';

const Balance = (props) => {
    const {transactions} = props;
    const total = transactions.reduce((a, b) => a + b.amount, 0);

    return (
        <div>
            <h3><code>Balance</code></h3>
            <p>${total}</p>
        </div>
    );
};

export default Balance;
