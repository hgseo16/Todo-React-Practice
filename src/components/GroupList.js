import React from 'react';

class GroupList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { groupLists: ['todos'] }
    }

    getStyle = () => {
        return {
            background: '#f4f4f4',
            height: '30px',
            width: '100%',
            margin: '2px',
            borderBottom: '1px #ccc dotted',
        }
    }

    componentDidUpdate() {
        let temp = [];
        let counter = 0;
        for (let title in this.props.list) {
            temp.push(title);
            counter++;
        }
        if (this.state.groupLists.length !== counter) {
            this.setState({ groupLists: temp })
        }
    }

    render() {
        return (
            <div>
                {this.state.groupLists.map((list) => {
                    return (<button style={this.getStyle()} onClick={() => this.props.activateGroup(list)}>
                        {list}
                    </button>);
                })}
            </div>

        )
    }

}

export default GroupList;