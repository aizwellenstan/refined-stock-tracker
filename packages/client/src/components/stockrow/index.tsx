import React, { Component } from 'react';

interface Props {
   ticker?: any;
}

type dataState = {
    data: any
}

class StockRow extends Component<Props, dataState>{
    constructor(props :Props) {
        super(props)
        this.state = {
            data:{}
        }
    }

    componentDidMount() {
        const url = 
        `$/api/stock/${this.props.ticker}/intraday-prices?chartLast=1`
        
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                    data: data[data.length - 1]
            })
        })
    }

    render() {
        return (
            <div>
                <tr>
                    <td>{this.props.ticker}</td>
                    <td>{this.state.data.close}</td>
                    <td>{this.state.data.date}</td>
                    <td>{this.state.data.label}</td>
                </tr>
            </div>
        );
    }
}

export default StockRow;