import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {
    logoutThunkCreator,
} from '../../redux/auth-reducer'


class HeaderContainer extends React.Component {

    render() {
        return < Header {...this.props} />
    }

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
let mapDispatchToProps = {
    logoutThunkCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);