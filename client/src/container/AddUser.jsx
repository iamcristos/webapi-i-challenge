import React, {Component} from 'react';
import FormField from '../component/Form/form';

class AddUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            update: false
        }
    }

    componentDidMount() {
        const {id} = this.props.history
        if (id) {
            this.setState({update: true})
        }
    }

    render() {
        return (
            <div>
                <FormField />
            </div>
        )
    }
}

export default AddUser;