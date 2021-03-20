import React from 'react';
import { connect } from 'react-redux';
import {
    getUsersThunkCreator,
    onPageChangedThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.onPageChangedThunkCreator(pageNumber);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalCountUsers={this.props.totalCountUsers}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followThunkCreator={this.props.followThunkCreator}
                unfollowThunkCreator={this.props.unfollowThunkCreator}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                isFollowingProgress={this.props.isFollowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCountUsers: state.usersPage.totalCountUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress,
    }
}

let mapDispatchToProps = {
    getUsersThunkCreator,
    onPageChangedThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
}

export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(UsersContainer));