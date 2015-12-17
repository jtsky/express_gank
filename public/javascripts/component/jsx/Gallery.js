/**
 * Created by Administrator on 2015/12/14.
 */
'use strict'
require('../../../stylesheets/scss/flex_grid')
var React = require('react');
var ReactDOM = require('react-dom');

/*var Bootstrap = require('react-bootstrap');
 var { Button } = Bootstrap;*/


var Gallery = React.createClass({
    //初始化状态 属于控件生命周期
    getInitialState: function () {
        return {
            data: {},
        };
    },
    //在初始化渲染执行之后立刻调用一次  属于控件生命周期
    componentDidMount: function () {
        this.loadDateFromAPI();
    },

    //初始化数据
    loadDateFromAPI: function () {
        $.get(this.props.url, function (data) {
            this.setState({data: data});
        }.bind(this), 'json');
    },

    render: function () {

        /*var childElements = [];
         for (var index in this.state.data.results) {
         var element = this.state.data.results[index];
         childElements.push(
         <div className="grid-item">
         <img src={element.url}/>
         </div>
         )
         }*/

        return (
            <div className="box">

                    <div className="child1">
                        <div className="child1-child">1-1</div>
                        <div className="child1-child">1-2</div>
                        <div className="child1-child">1-3</div>
                        <div className="child1-child">1-4</div>
                        <div className="child1-child">1-5</div>
                    </div>

                    <div className="child">2</div>
                    <div className="child">3</div>
                    <div className="child">4</div>
                    <div className="child">5</div>


            </div>
            /*<Masonry
             className={''} // default ''
             elementType={'div'} // default 'div'
             options={masonryOptions} // default {}
             disableImagesLoaded={true} // default false
             >
             {childElements}
             </Masonry>*/
        );
    }

});

module.exports = Gallery;
ReactDOM.render(
    <Gallery url="/api"/>,
    $('#container')[0]
    //document.getElementById('container')
);


