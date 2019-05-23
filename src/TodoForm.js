import React, {Component} from 'react';

class TodoForm extends Component {

    render() {
        return (
            <form onSubmit={this.props.submit}>
                <input type="text" value={this.props.value} onChange={this.props.change}/>
                <button  type="submit" >add</button>
            </form>
        )
    }
}
export default TodoForm