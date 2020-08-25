import { createElement, render, Component } from './toy-react';

class MyComponent extends Component {
	render() {
		return (
			<div>
				<h1>this should be right</h1>
				<p>11</p>
        {this.children}
			</div>
		);
	}
}
render(
	<MyComponent id="aa" class="bb" data-attr="aa-bb">
		<div>this is text<span>123</span></div>
		<div></div>
		<div></div>
	</MyComponent>, document.body
);
