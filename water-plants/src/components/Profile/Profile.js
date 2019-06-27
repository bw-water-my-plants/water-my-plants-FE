import React from 'react';
import styled from 'styled-components';
import Colors from '../../styling/colors';
import { connect } from 'react-redux';
import { fetchProfile, updateProfile } from '../../actions/actionCreators';
import ProfileTop from './ProfileTop';
import ProfileInfo from './ProfileInfo';

export class Profile extends React.Component {
    componentDidMount() {
        this.props.fetchProfile();
    }
    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <div>
                <ProfileTop username={this.props.profile.username} />
                <ProfileInfo username={this.props.profile.username} phone_number={this.props.profile.phone_number} email={this.props.profile.email} updateProfile={this.props.updateProfile} fetchProfile={this.props.fetchProfile} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profile.profile,
        fetching: state.api.fetching,
        error: state.api.error,
        posting: state.api.posting
    };
}
export default connect(
    mapStateToProps,
    {
        fetchProfile,
        updateProfile
    }
)(Profile);
