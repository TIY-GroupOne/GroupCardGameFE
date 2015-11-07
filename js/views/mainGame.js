import React from 'react';
// import HomeViewComponent from '.home';

export default React.createClass({

  spinClickHandler () {
    return this.props.onSpinClick();
  },
  
  signOutClickHandler () {
     return this.props.onSignOutClick();
  }, 


   render() {
    return (
      <div>
        <div>Game</div>
        <div>Log In Form</div>
        <button onClick ={this.signOutClickHandler}>Sign Out</button>
      </div>

      );

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
       console.log('main game view'); 
  }
});