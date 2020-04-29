import React from 'react';
import TransactionListEntry from "./transaction-list-entry";

const TransactionList = (props) => {
    var list = props.transactions.map((transaction, idx) => (
        <tr>
            <td>
                <TransactionListEntry
                    transaction={transaction.amount}
                    key={idx} />
            </td>

            <td>
                <TransactionListEntry
                    transaction={transaction.description}
                    key={idx} />
            </td>
        </tr>
    ));

    return (
        <div>
            <h3><code>Transactions</code></h3>
            <div>
                <table className="bp3-html-table .modifier">
                    <thead>
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

export default TransactionList;
