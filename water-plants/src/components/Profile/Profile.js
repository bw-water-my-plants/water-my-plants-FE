import React from 'react';
import styled from 'styled-components';
import Colors from '../../styling/colors';
import { connect } from 'react-redux';
import { fetchProfile, updateProfile } from '../../actions/actionCreators';
import ProfileTop from './ProfileTop';

export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            phone_number: '',
            showUsernameForm: false,
            showPhoneForm: false,
            showEmailForm: false
        };
    }

    toggleUsernameForm = () => {
        let showUsernameForm = !this.state.showUsernameForm;
        this.setState({ showUsernameForm });
    };

    toggleshowPhoneForm = () => {
        let showPhoneForm = !this.state.showPhoneForm;
        this.setState({ showPhoneForm });
    };

    toggleshowPhoneForm = () => {
        let showEmailForm = !this.state.showEmailForm;
        this.setState({ showEmailForm });
    };

    componentDidMount() {
        this.props.fetchProfile();
    }
    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <SDEnv>
                <ProfileTop username={this.props.profile.username} />
                <SDRow>
                    Username:
                    <div className={this.state.showUsernameForm ? 'hide' : 'show'}>
                        <div>{this.props.profile.username}</div>
                        <div>icon</div>
                    </div>
                    <div className={this.state.showUsernameForm ? 'show' : 'hide'}>
                        <input value={this.state.username} />
                        <div>save</div>
                    </div>
                </SDRow>
                <SDRow>
                    Phone nr:
                    <div className={this.state.showPhoneForm ? 'hide' : 'show'}>
                        <div>{this.props.profile.phone_number}</div>
                        <div>icon</div>
                    </div>
                    <div className={this.state.showPhoneForm ? 'show' : 'hide'}>
                        <input value={this.state.phone_number} />
                        <div>save</div>
                    </div>
                </SDRow>
                <SDRow>
                    Email:
                    <div className={this.state.showEmailForm ? 'hide' : 'show'}>
                        <div>{this.props.profile.email}</div>
                        <div>icon</div>
                    </div>
                    <div className={this.state.showEmailForm ? 'how' : 'hide'}>
                        <input value={this.state.email} />
                        <div>save</div>
                    </div>
                </SDRow>
            </SDEnv>
        );
    }
}

const SDEnv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif h1 {
        color: ${Colors.Primary};
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 20px;
    }
`;

const SDRow = styled.div`
    width: 100%;
    font-size: 1.7rem;
    display: flex;
    div {
        display: flex;
    }
    .hide {
        display: none;
    }
    .show {
        display: block;
    }
`;

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
