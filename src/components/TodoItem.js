import React from 'react';
// import PropTypes from 'prop-types';

const TodoItem = (props) => {

    const getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: props.todo.completed ? 'line-through' : 'none'
        }
    }

    const { id, title, completed } = props.todo;

    return (
        <div style={getStyle()}>
            <p>
                <input type="checkbox" onChange={() => props.markComplete(id)} checked={completed} />
                {` ${title}`}
            </p>
        </div>
    )
}

// class TodoItem extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     getStyle = () => {
//         return {
//             background: '#f4f4f4',
//             padding: '10px',
//             borderBottom: '1px #ccc dotted',
//             textDecoration: this.props.todo.completed ? 'line-through' : 'none'
//         }
//     }


//     render() {
//         const { id, title, completed } = this.props.todo;
//         return (
//             <div style={this.getStyle()}>
//                 <p>
//                     <input type="checkbox" onChange={() => this.props.markComplete(id)} checked={completed} />
//                     {` ${title}`}
//                 </p>
//             </div>
//         )
//     }
// }

// TodoItem.propTypes = {
//     todo: PropTypes.object.isRequired
// }

export default TodoItem;