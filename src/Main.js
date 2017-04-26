import React, {Component} from 'react';

class Main extends Component {
  render() {
    return (

      <section className="main">
        <input className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {/*<!-- These are here just to show the structure of the list items -->
          <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->*/}
          {this.props.todos.map((todo, index) => {
            return (
              <li className={todo.complete ? "completed"  : null} key={index}>
                <div className="view">
                  <input className="toggle" type="checkbox" checked={todo.complete} onClick={this.props.toggleClick.bind(this,todo)}/>
                  <label>{todo.task}</label>
                  <button className="destroy" onClick={this.props.deletedTodoTasks.bind(this, todo)}></button>
                </div>
                <input className="edit" value="Create a TodoMVC template"/> {/*{todo.task}*/}
              </li>
            )
          })}
        </ul>
      </section>

    )
  }
}

export default Main;
