import React, {Component} from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: 'Description',
            amount: 'Amount'
        }
    }

    handleDescChange = (e) => {
        this.setState({
            description: e.target.value
        })
    };

    handleAmtChange = (e) => {
        this.setState({
            amount: e.target.value
        })
    };

    add = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.description, this.state.amount)
    };

    render() {
        return (
            <form className="form-border" onSubmit={this.add}>
                <label htmlFor="description" className="desc">Description</label>
                <div className='field'>
                    <input type='text'
                           onChange={this.handleDescChange} />
                </div>

                <label htmlFor="amount" className="amt">Amount</label>
                <div className='field'>
                    <input type='text'
                           onChange={this.handleAmtChange} />
                </div>

                <button>
                    Add
                </button>
            </form>
        );
    }
}

export default Add;
