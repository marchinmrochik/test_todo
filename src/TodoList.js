import React, {Component} from 'react';

class TodoList extends Component {

    render() {
        return (
            <ul>
                {this.props.items.map((item, index) =>
                    <li key={index}>
                        {item.editItem ?
                            this.props.renderEditView(item, index) : this.props.renderDefaultView(item, index)
                        }</li>
                )}
            </ul>
        )
    }
}

export default TodoList