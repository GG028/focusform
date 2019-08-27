import React, { Component } from 'react';
import css from '../css/css.css';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

const style = {
	height: '80px',
	'verticalAlign': 'middle',
	'textAlign': 'center',
	'lineHeight': '20px',
}

class Login extends Component {

	renderLogin() {
		return (
			<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as='h2' color='teal' textAlign='center'>
						<Image src='../logo.png' /> Log-in to your account
      </Header>
					<Form size='large'>
						<Segment stacked>
							<Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
							<Form.Input
								fluid
								icon='lock'
								iconPosition='left'
								placeholder='Password'
								type='password'
							/>

							<Button color='teal' fluid size='large'>
								Login
          </Button>
						</Segment>
					</Form>
					<Message>
						New to us? Sign Up
					</Message>
				</Grid.Column>
			</Grid>

		);
	}

	render() {
		return <css><div style={style} className="ui middle aligned center aligned grid">{this.renderLogin()}</div></css>
	};
}

export default Login;