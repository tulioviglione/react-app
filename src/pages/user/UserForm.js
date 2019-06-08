import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { React } from 'react';

const UserFormFunc = props => {
    return (
        <form>
            <label>Nome</label>
            <input type="name" component="input" name="name" />
            <label>Email</label>
            <input type="email" component="input" name="email" />
        </form>
    );
}

const UserForm = (reduxForm({
    form:'formUser'
}))(UserFormFunc)

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(UserForm)