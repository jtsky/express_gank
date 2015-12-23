/**
 * Created by Administrator on 2015/12/14.
 */
'use strict'
import Flexbox from '../../../stylesheets/scss/Gallery';
import React , {PropTypes,Component} from 'react';
import WaveModal from 'react-boron/WaveModal';
import { connect } from 'react-redux';
import {showGallery,showBigImg} from  '../../../redux/action/actions';

class Column extends Component {
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
                    onClick={()=>{this.showModal(element.url)}}
                />
            );
        }

        return (
            <div className={'column-' + this.props.column}>
                {elemets}
            </div>
        );
    }
}

class Gallery extends Component {
    componentDidMount() {
        if (this.props.column < 4 || this.props.column > 10) {
            alert('4 <= column <= 10');
            throw RangeException('4 <= column <= 10');
        }
        this.loadDateFromAPI(this.props.apiUrl, this.props.column);
    }

    loadDateFromAPI(url, column) {
        $.get(url, function (data) {
            //组合方法
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
            this.props.dispatch(showGallery(columns));
        }.bind(this), 'json');

    }

    render() {
        console.log('this.props.elements===>', this.props);
        let elements = [];
        if (this.props.elements) {
            for (let index in this.props.elements) {
                let element = this.props.elements[index];
                elements.push(<Column element={element}
                                      action={this.showModal.bind(this)}
                                      column={this.props.column}
                                      key={index}
                />);
            }
        }
        return (
            <div className='box'>
                <WaveModal ref='modal' className='modal'>
                    <img src={this.props.src} className='img'/>
                </WaveModal>
                {elements}
            </div>
        );
    }

    showModal(url) {
        this.props.dispatch(showBigImg(url));
        //this.setState({src: url});
        this.refs.modal.show();
    }
}

Gallery.propTypes = {
    column: PropTypes.string.isRequired,//必须字段
    apiUrl: PropTypes.string.isRequired,//必须时段
    elements: PropTypes.array,
    src: PropTypes.string
};


/*
 * 这里的state 为全局的state 即combineReducers合并以后的初始state 然后返回组件中需要的props
 * 对应App.propTypes
 * */
function select(state) {
    return {
        elements: state.showGallery,
        src: state.showBigImg
    };
}

export default connect(select)(Gallery);


