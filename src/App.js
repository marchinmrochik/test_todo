/* eslint-disable */
import React, {Component} from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends Component {
    constructor() {
        super();

        this.state = {
            item: '',
            items: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.cancelEditItem = this.cancelEditItem.bind(this);
        this.renderEditView = this.renderEditView.bind(this);
        this.renderDefaultView = this.renderDefaultView.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const newItem = {
            text: this.state.item,
            editItem: false
        };

        this.setState({
            item: '',
            items: [...this.state.items, newItem]})
    }

    deleteItem(index_item) {
        this.setState({
            items: this.state.items.filter((el, index) => index !== index_item)
        })
    }

    handleChange(e) {
        this.setState({item : e.target.value})
    }

    editItem(index) {
        this.state.items.forEach((item, i) => {
            i === index ? item.editItem = true : item.editItem = false
        });
        this.setState({
            items: this.state.items
        })
    }

    cancelEditItem(item){
        item.editItem = false;
        this.setState({
            items: this.state.items
        })
    }

    updateComponentValue(item) {
        item.text = this.testInput.value;
        item.editItem = false;
        this.setState({
            items: this.state.items
        })
    }

    renderEditView(item, index) {
        return <div>
            <input
                type="text"
                defaultValue={item.text}
                ref={(input) => this.testInput = input}
            />
            ____
            <span onClick={() => this.cancelEditItem(item)}>X</span>
            ____
            <span onClick={() => this.updateComponentValue(item)}>OK</span>
        </div>
    }

    renderDefaultView(item, index) {
        return <div>
                <span>
                  {item.text}
                </span>
            ___
            <span onClick={() => this.deleteItem(index)}>X</span>
            ____
            <span onClick={() => this.editItem(index)}>edit</span>
        </div>
    }


    render() {
        return (
            <div className="App">
                <TodoForm value={this.state.item} change={this.handleChange} submit={this.handleSubmit}/>
                <TodoList
                    items={this.state.items}
                    renderEditView={this.renderEditView}
                    renderDefaultView={this.renderDefaultView}
                />
            </div>
        )
    }
}
export default App