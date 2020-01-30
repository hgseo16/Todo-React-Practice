import React from 'react';
import TodoItem from './components/TodoItem';
import AddItem from './components/AddItem';
import AddGroup from './components/AddGroup';
import GroupList from './components/GroupList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                // {
                //     id: 1,
                //     title: 'example_title',
                //     completed: false,
                //     activated: true
                // }
            ]
        };
    }

    activateGroup = (title) => {
        console.log(`${title} clicked`);
        console.log(this.state);
    }

    addGroup = (input) => {
        let obj = {};
        obj[input] = [];
        this.setState(obj);
    }

    addItem = (input) => {
        let tempArr = [];
        this.state.todos.map(todo => {
            tempArr.push(todo);
        });
        let newList = { id: this.state.todos.length + 1, title: input, completed: false, activated: true }
        tempArr.push(newList);
        this.setState({ todos: tempArr });
        // setTimeout(() => console.log(this.state.todos), 0);
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    }


    render() {
        return (
            <div className="app">
                <div className="left">
                    <div className="header">
                        <form>
                            <input placeholder="enter task">
                            </input>
                            <button type="submit">Find Task</button>
                        </form>
                        <GroupList list={this.state} activateGroup={this.activateGroup.bind(this)} />
                        <AddGroup input={this.addGroup.bind(this)} />
                    </div>
                </div>
                <div className="right">
                    <AddItem addItem={this.addItem.bind(this)} state={this.state} />
                    {this.state.todos.map((todo) => {
                        return <TodoItem key={todo.id} todo={todo} markComplete={this.markComplete.bind(this)} />
                    })}
                </div>
            </div>
        )
    }
}

export default App;