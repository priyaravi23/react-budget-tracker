import React from 'react';

const TransactionTable = (props) => {
    const list = props.transactions.map((transaction, idx) => (
        <tr>
            <td>
                {transaction.amount}
            </td>

            <td>
                {transaction.description}
            </td>
        </tr>
    ));

    return (
        <div>
            <br />
            <div>
                <table className="table table-striped tbl-border">
                    <thead className='thead-dark'>
                        <tr>
                            <th>Amount</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionTable;
