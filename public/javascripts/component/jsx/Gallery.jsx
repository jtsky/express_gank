/**
 * Created by Administrator on 2015/12/14.
 */
'use strict'
import Flexbox from '../../../stylesheets/scss/Gallery';
import React , {PropTypes,Component} from 'react';
import WaveModal from 'react-boron/WaveModal';
import Infinite from 'react-infinite';
import { connect } from 'react-redux';
import {showGallery,showBigImg,isFinishLoad} from  '../../../redux/action/actions';

class Column extends Component {
    render() {
        let elemets = [];
        for (let index in this.props.element) {
            let element = this.props.element[index];
            elemets.push(
                <img
                    className="column-img"
                    src={element.url}
                    key={element.objectId}
                    onClick={()=>{this.props.showBigImg(element.url)}}
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

    constructor() {
        super();
        //设置网页滚动监听
        window.addEventListener("scroll", e=> {
            this.handleScroll(e)
        });
    }

    componentDidMount() {
        if (this.props.column < 4 || this.props.column > 10) {
            alert('4 <= column <= 10');
            throw RangeException('4 <= column <= 10');
        }
        this.loadDateFromAPI(this.props.apiUrl, this.props.column);
    }

    componentDidUpdate() {
        this.props.dispatch(isFinishLoad(true));
    }

    loadDateFromAPI(url) {
        $.get(url, function (data) {
            this.props.dispatch(showGallery(data.results));
        }.bind(this), 'json');

    }


    handleScroll(e) {
        let boxHeight = $('.box').height();
        let inHeight = window.innerHeight;
        let scrollT = $(window).scrollTop();
        let totalScrolled = scrollT + inHeight;
        if (totalScrolled + 100 > boxHeight && this.props.isInfiniteLoading) {
            let pager = this.props.elements.length / 20 + 1;
            this.loadDateFromAPI(`/api?c=20&p=${pager}`);
        }

    }


    render() {
        let elements = [];
        let columns = [];
        //组合方法
        function mix(column, index, array) {
            if (columns[column]) {
                columns[column].push(array[index]);
            } else {
                let column = [];
                column.push(array[index]);
                columns.push(column);
            }
        }

        for (let index in this.props.elements) {
            //分组
            mix(index % this.props.column, index, this.props.elements);
        }
        for (let index in columns) {
            let element = columns[index];
            elements.push(<Column element={element}
                                  showBigImg={url=>{this.showModal(url)}}
                                  column={this.props.column}
                                  key={index}
            />);
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
        this.refs.modal.show();
    }


}

Gallery.propTypes = {
    column: PropTypes.number.isRequired,//必须字段
    apiUrl: PropTypes.string.isRequired,//必须时段
    elements: PropTypes.array,
    src: PropTypes.string,
    isInfiniteLoading: PropTypes.bool
};
/*
 * 这里的state 为全局的state 即combineReducers合并以后的初始state 然后返回组件中需要的props
 * 对应App.propTypes
 * */
function select(state) {
    return {
        elements: state.showGallery,
        isInfiniteLoading: state.isFinishLoad,
        src: state.showBigImg
    };
}

export default connect(select)(Gallery);


