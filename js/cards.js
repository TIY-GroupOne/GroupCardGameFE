//REACT PART

//app part, 
import React from 'react';


var App = React.createClass({
    getInitialState: function() {
        return {
            flipped: false
        };
    },

    flip: function() {
        this.setState({ flipped: !this.state.flipped });
    },

    render: function() {
        return <div>
            <Flipper flipped={this.state.flipped} orientation="horizontal" />
            <Flipper flipped={this.state.flipped} orientation="vertical" />

            <div className="button-container">
                <button onClick={this.flip}>Flip!</button>
            </div>
        </div>;
    }
});


//Flipper part

var Flipper = React.createClass({
    render: function() {
        return <div className={"flipper-container " + this.props.orientation}>
            <div className={"flipper" + (this.props.flipped ? " flipped" : "")}>
                <Front>the front!</Front>
                <Back>the back!</Back>
            </div>
        </div>;
    }
});

//Flipper part 2: front, back
var Front = React.createClass({
    render: function() {
        return <div className="front tile">{this.props.children}</div>;
    }
});

var Back = React.createClass({
    render: function() {
        return <div className="back tile">{this.props.children}</div>;
    }
});


//css part

// .flipper-container {
//     float:left;
//     width:250px;
//     height:250px;
//     margin-right:15px;
//     display:block; .perspective;

//     span {
//         color:white;
//     }

//     >div.flipper {
//         float:left;
//         width:100%;
//         height:100%;
//         position:relative;
//         .transform-style(preserve-3d);

//         .front, .back {
//             float:left;
//             display:block;  
//             width:100%;
//             height:100%;
//             .backface-visibility-hidden;
//             position:absolute;
//             top:0;
//             left:0;
//             .transform-style(preserve-3d);
//             .transition(-webkit-transform ease 500ms);
//             .transition(transform ease 500ms);
//         }

//         .front {
//             z-index:2;
//             background:#19489E;

            /* front tile styles go here! */
        // }

        // .back {
        //     background:#9E1919;

            /* back tile styles go here! */
//         }
//     }
// }

// .flipper-container.horizontal {
//     .front { .transform(rotateY(0deg)); }
//     .back { .transform(rotateY(-180deg)); }

//     div.flipper.flipped {
//         .front { .transform(rotateY(180deg)); }
//         .back { .transform(rotateY(0deg)); }
//     }
// }

// .flipper-container.vertical {
//     .front { .transform(rotateX(0deg)); }
//     .back { .transform(rotateX(-180deg)); }

//     div.flipper.flipped {
//         .front { .transform(rotateX(180deg)); }
//         .back { .transform(rotateX(0deg)); }
//     }
// }

// all via https://www.codementor.io/reactjs/tutorial/building-a-flipper-using-react-js-and-less-css

