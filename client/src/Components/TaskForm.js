import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class TaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirectHome: false,
			event: Object.assign({
				task: '',
			}, props.event)
		}
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState((prevState, props) => ({
			event:{
				...prevState.event,
				[name]:value
			}
		}))
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.func(this.state.event);
		window.location.reload();
		this.setState({
			redirectHome: true
		});
	}
	render() {
		const { task, id } = this.state.event
		return(
			<div className="TaskForm">

				<form
					onSubmit={this.handleSubmit.bind(this)}
					className={id ? 'edit-task' : 'create-task'}>
					{this.state.redirectHome &&
					<Redirect to='/'/>}

          <label>
						<h4>Task</h4>
						<textarea rows='3' colts ='80'
							name='task'
							value={task}
							onChange={this.handleChange.bind(this)}/>
					</label>

					<button type='submit'>{id ? 'edit-task' : 'create-task'}</button>

				</form>
		  </div>
		)
	}
}

export default TaskForm;
