/**
 * Created by Administrator on 2015/12/14.
 */
'use strict'
import Flexbox from '../../../stylesheets/scss/Gallery';
import React  from 'react';
import ReactDom from 'react-dom';
import WaveModal from 'react-boron/WaveModal';


class Column extends React.Component {
    showModal(url) {
        this.props.action(url);
    }

    render() {
        let elemets = [];
        for (let index in this.props.element) {
            let element = this.props.element[index];
            elemets.push(
                <img
                    className="column-img"
                    src={element.url}
                    key={element.objectId}
                    onClick={this.showModal.bind(this,element.url)}
                />
            );

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

export class Gallery extends React.Component {

    constructor() {
        super();
        this.state = {
            elements: [],
            src: ""
        };
    }

    componentDidMount() {
        if (this.props.column < 4 || this.props.column > 10) {
            alert('4 <= column <= 10');
            throw RangeException('4 <= column <= 10');
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
            this.setState({elements: columns});
        }.bind(this), 'json');

    }

    render() {
        let elements = [];
        for (let index in this.state.elements) {
            let element = this.state.elements[index];
            elements.push(<Column element={element}
                                  action={this.showModal.bind(this)}
                                  column={this.props.column}
                                  key={index}

            />);
        }
        return (
            <div className='box'>
                <WaveModal ref='modal' className='modal'>
                    <img src={this.state.src} className='img' />
                </WaveModal>
                {elements}
            </div>
        );
    }

    showModal(url) {
        this.setState({src: url});
        this.refs.modal.show();
    }


}


ReactDom.render(
    <Gallery url="/api" column="5"/>,
    $('.container')[0]
);


