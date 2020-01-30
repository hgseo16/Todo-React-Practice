import React from 'react';

class AddGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    textChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => { event.preventDefault(); this.props.input(this.state.value); }}>
                    <input type="text" name="name" onChange={(e) => this.textChange(e)} />
                    <input type="submit" value=" New List " />
                </form>
            </div>
        )
    }

}



export default AddGroup;