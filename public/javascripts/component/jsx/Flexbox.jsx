/**
 * Created by Administrator on 2015/12/14.
 */
'use strict'
import Flexbox from '../../../stylesheets/scss/Flexbox'
import React from 'react'
import ReactDOM from 'react-dom'

class Column extends React.Component {
    render() {
        let elemets = [];
        for (let index in this.props.column) {
            elemets.push(<image src={this.props.column[index].url}
                                className="column-img"
                                key={this.props.column[index].objectId}
            />);
        }
        return (
            <div className="column-common">
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
        this.loadDateFromAPI()
    }

    loadDateFromAPI() {
        $.get(this.props.url, function (data) {
            let array = data.results;
            let columns = [];
            for (let index in array) {
                switch (index % 5) {
                    case 0:
                        if (columns[0]) {
                            columns[0].push(array[index]);
                        } else {
                            let column0 = [];
                            column0.push(array[index]);
                            columns.push(column0);
                        }
                        break;
                    case 1:
                        if (columns[1]) {
                            columns[1].push(array[index]);
                        } else {
                            let column1 = [];
                            column1.push(array[index]);
                            columns.push(column1);
                        }
                        break;
                    case 2:
                        if (columns[2]) {
                            columns[2].push(array[index]);
                        } else {
                            let column2 = [];
                            column2.push(array[index]);
                            columns.push(column2);
                        }
                        break;
                    case 3:
                        if (columns[3]) {
                            columns[3].push(array[index]);
                        } else {
                            let column3 = [];
                            column3.push(array[index]);
                            columns.push(column3);
                        }
                        break;
                    case 4:
                        if (columns[4]) {
                            columns[4].push(array[index]);
                        } else {
                            let column4 = [];
                            column4.push(array[index]);
                            columns.push(column4);
                        }
                        break;
                }
            }
            this.setState({columns: columns});
        }.bind(this), 'json');
    }


    render() {
        let elements = [];
        for (let index in this.state.columns) {
            let element = this.state.columns[index];
            elements.push(<Column column={element} key={index}/>);
        }

        return (
            <div className="box">
                {elements}
            </div>
        );
    }
}

module.exports = Gallery;
ReactDOM.render(
    <Gallery url="/api"/>,
    $('.container')[0]
);


