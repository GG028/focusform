import React, { Component } from 'react';
import css from '../css/css.css';

const style = {
	height: '80px',
	'verticalAlign': 'middle',
	'textAlign': 'center',
	'lineHeight': '20px'
  }

class Login extends Component {
	
	renderLogin() {
		return (
			<div className="column twelve wide" >
				<i className="user circle icon" size='large'></i>
				<div className="content">
					Log-in to your account
      					</div>
				<form action="https://s.codepen.io/voltron2112/debug/PqrEPM?" method="get" className="ui large form">
					<div className="ui stacked secondary  segment">
						<div className="field">
							<div className="ui left icon input">
								<i className="user icon"></i>
								<input type="text" name="email" placeholder="E-mail address" />
							</div>
						</div>
						<div className="field">
							<div className="ui left icon input">
								<i className="lock icon"></i>
								<input type="password" name="password" placeholder="Password" />
							</div>
						</div>
						<div className="ui fluid large teal submit button">Login</div>
					</div>

					<div className="ui error message"></div>

				</form>

			
			</div>

		);
	}

	render() {
		return <css><div style={style} className="ui middle aligned center aligned grid">{this.renderLogin()}</div></css>
	};
}

export default Login;