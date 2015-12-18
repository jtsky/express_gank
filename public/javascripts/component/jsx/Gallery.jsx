/**
 * Created by Administrator on 2015/12/14.
 */
'use strict'
import Flexbox from '../../../stylesheets/scss/Gallery'
import React from 'react'
import ReactDOM from 'react-dom'
class Column extends React.Component {
    handleClick(event) {
        console.log(event.target.currentSrc);
    }

    render() {
        let elemets = [];
        for (let index in this.props.element) {
            let element = this.props.element[index];
            elemets.push(<image
                className="column-img"
                src={element.url}
                key={element.objectId}
                onClick={this.handleClick}
            />);
        }

        let className = 'column-';
        className += this.props.column;
        return (
            <div className={className}>
                {elemets}
            </div>
        );
    }
}


class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            columns: []
        };

    }

    componentDidMount() {
        if(this.props.column < 5 || this.props.column > 8){
            alert('5<=column<=8');
            throw RangeException('5<=column<=8');
        }
        this.loadDateFromAPI(this.props.column);
    }

    loadDateFromAPI(column) {
        $.get(this.props.url, function (data) {
            function mix(column, index) {
                if (columns[column]) {
                    columns[column].push(array[index]);
                } else {
                    let column = [];
                    column.push(array[index]);
                    columns.push(column);
                }
            }

            let array = data.results;
            let columns = [];
            for (let index in array) {
                mix(index % column, index);
            }
            this.setState({columns: columns});
        }.bind(this), 'json');

    }


    render() {
        let elements = [];
        for (let index in this.state.columns) {
            let element = this.state.columns[index];
            elements.push(<Column element={element} column={this.props.column} key={index}/>);
        }
        return (
            <div className='box'>
                {elements}
            </div>
        );
    }
}

module.exports = Gallery;
ReactDOM.render(
    <Gallery url="/api" column="5"/>,
    $('.container')[0]
);


