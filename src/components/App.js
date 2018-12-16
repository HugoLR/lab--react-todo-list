import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state =
      {task:{
        name: [],
        id: "",
        isCompleted: false
      }
    };
    this.createTask = this.createTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  createTask(event){
    event.preventDefault();

    this.setState({
      task:{
        name: this.state.task.name.concat([event.target.task.value]),
        id: event.target.task.value,
        isCompleted: false
      }
    })
    console.log(this.state.task.id)
  }

  completeTask(event){
    this.setState({

    })
    console.log(this.state.task.isCompleted)
  }


  render(){

    var today = new Date();

    return(
      <div className="todoapp--container">
        <div className="filters">
          <input type="search" placeholder="Search" />
          <button>All tasks</button>
          <button>Complete</button>
          <button>Incomplete</button>
          <button><i className="fas fa-plus"></i>New Task</button>
        </div>
        <div className="main">
          <div className="search-task">
            <form onSubmit={this.createTask}>
              <input className="main-search" name="task" type="search" placeholder="Task" />
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="dates">
            <h1>Today</h1>
            <p>{today.toString()}</p>
          </div>
          <div className="tasks">
            <h3>Tasks</h3>
            <ul>
              {this.state.task.name.map((task) => {
                return(
                  <label className="label--task ">
                  <input  type="checkbox" onClick={() => this.completeTask(task.id)} />
                  <li id={task}>{task}</li>
                  </label>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
