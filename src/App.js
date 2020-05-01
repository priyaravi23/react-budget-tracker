import React, {Component} from 'react';
import TransactionTable from "./components/transaction-table";
import Balance from "./components/balance";
import Add from "./components/add";
import { v4 as uuidv4 } from 'uuid';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 'fd73a1f6-90aa-43ae-9aae-5479196c0dbb',
                    amount: -30,
                    description: 'Restaurant'
                },
                {
                    id: 'e83d1a69-f995-4b51-906d-28a765a4d92e',
                    amount: 5000,
                    description: 'Paycheck'
                },
                {
                    id: 'a9a95fbd-69a4-4678-a4c2-9f5c7bd9b97b',
                    amount: -2000,
                    description: 'Rent'
                },
                {
                    id: '4b3bdcb4-98bd-4044-821d-e9b2cd910fc7',
                    amount: -750,
                    description: 'Tuition Loan'
                }
            ]
        };
    }

    add = (description, amount) => {
        const newItem = {
            id: uuidv4(),
            description: description,
            amount: +amount
        };

        this.setState({
            data: this.state.data.concat(newItem)
        })
    };

    render() {
        console.log(this.state.data);

        return (
            <form className="form-img">
                <div className='card-body'>
                    <h3><code><b>Budget Tracker</b></code></h3>
                    <Add onAdd={this.add} />
                    <br />
                    <TransactionTable transactions={this.state.data} />
                    <br />
                    <Balance transactions={this.state.data} />
                </div>
            </form>
        );
    }
}

export default App;
