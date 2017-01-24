import React, { Component} from 'react'
import {
  Animated
} from 'react-native';


export default class RenderWithAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftAnim: new Animated.Value(-300),
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    const { delay } = this.props;

    Animated.parallel([
      Animated.timing(this.state.leftAnim, {
        toValue: 0,
        delay: delay,
        duration: 1000,
      }),
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        delay: delay,
        duration: 2000
      })
    ])
    .start();

  }

  render() {
    return (
      <Animated.View
        style={{ left: this.state.leftAnim, opacity: this.state.fadeAnim }}>
        { this.props.children }
      </Animated.View>
   );
  }
 }

RenderWithAnimation.propTypes = {
  children: React.PropTypes.object,
  delay: React.PropTypes.number,
};
