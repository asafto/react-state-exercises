import React, { Component } from 'react';
import './Clock.css';

/**
 * Make a clock component that updates every second!
 * It should look like in the attached image: src/Clock/clock.gif
 * Open the image to see the animation.
 */

class Clock extends Component {

	constructor(props) {
		super(props);
		this.state = {
			time: new Date().toLocaleTimeString()
		};
	}

	componentDidMount() {
		this.intervalID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	tick() {
		this.setState({
			time: new Date().toLocaleTimeString()
		});
	}

	render() {
		return (
			<div>
				<h1>Clock</h1>
				<div  className="clock">
					It is: {this.state.time}
				</div>
			</div>
		);
	}
}

export default Clock;