import React, {Component} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: [
        { task: 'Taste JavaScript', complete: true },
        { task: 'Buy a unicorn', complete: false }
      ]
    }
  }

  addTodo(words) {
    let newTodo = {
      task: words,
      complete: false
    }
    let newTodosArray = this.state.todos.concat(newTodo)
    this.setState({todos: newTodosArray})
  }
  /*Counting tasks in main section*/

  itemsLeftCount() {
    if (this.state.todos.length === 0) {
      return "0"
    } else {
      return this.state.todos.length
    }
  }

  /*Map this
    if circle is checked(marked complete) & you click that circle(unmarking it)
  */
  toggleClick(todo) {
  this.setState({todos: this.state.todos.map(currentListItem => {
    if (currentListItem === todo) {
      todo.complete = !todo.complete;
    }
      return currentListItem;

  })})
  }

/*Filter this*/
  deletedTodoTasks(todo) {
    console.log("test");
    this.setState({todos: this.state.todos.filter(currentListItem => {
      return currentListItem !== todo;
    })
   })
  }

  render() {
    return (
      <section className="todoapp">

        <Header sendWordsToApp={this.addTodo.bind(this)}/> {/*<!-- This section should be hidden by default and shown when there are todos -->*/}

        <Main
          todos={this.state.todos}
          deletedTodoTasks={this.deletedTodoTasks.bind(this)}
          toggleClick={this.toggleClick.bind(this)}
        />

         {this.state.todos.length === 0 ? null : <Footer counter={this.itemsLeftCount()}/>}


      </section>
    );
  }
}

export default App;
