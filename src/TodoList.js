import { Component } from "react";
import list from './list.png';

export class TodoList extends Component {

    state = {
        userInput: '',
        todoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(input) {
        if (input === ''){
            alert ('Please enter an item!');
        }
        else {
        let listArray = this.state.todoList;
        listArray.push(input);
        this.setState({todoList: listArray, userInput: ''});
        console.log(listArray);
    }
    }

    deleteItem() {
        let listArray = this.state.todoList;
        listArray = [];
        this.setState({todoList: listArray})
    }

    crossWord(e) {
        const li = e.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input placeholder="What are your plans for today?"
                type="text" onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                value={this.state.userInput} />
            </div>
            <div className="container">
                <button className="add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
            </div>
            <ul>
                {this.state.todoList.map((item,index) => (<li onClick={this.crossWord} key={index}>
                <img src={list} alt="checklist" width="20px"/>
                {item}</li>))}
            </ul>
            <div className="container">
                <button className="delete" onClick={() => this.deleteItem()}>Delete</button>
            </div>
            </form>
            </div>
        )
    }

}