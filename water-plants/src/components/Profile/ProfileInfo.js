import React from 'react';
import styled from 'styled-components';
import Colors from '../../styling/colors';
import pen from '../../assets/images/pen.png';
import xSVG from '../../assets/vectors/x.svg';
import checkSVG from '../../assets/vectors/check.svg';

export default class ProfileInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameEdit: false,
            username: '',
            phoneEdit: false,
            phone_number: '',
            emailEdit: false,
            email: ''
        };
    }

    toggleUsernameEdit = () => {
        let usernameEdit = !this.state.usernameEdit;
        this.setState({ usernameEdit });
    };

    togglePhoneEdit = () => {
        let phoneEdit = !this.state.phoneEdit;
        this.setState({ phoneEdit });
    };

    toggleEmailEdit = () => {
        let emailEdit = !this.state.emailEdit;
        this.setState({ emailEdit });
    };

    handeInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        return (
            <SDProfileBlock>
                <SDLabelRow>Username:</SDLabelRow>
                <SDInputDiv>
                    <SDInput name="username" value={this.state.username} className={this.state.usernameEdit ? 'show' : 'hide'} onChange={e => this.handeInput(e)} />
                    <img src={xSVG} alt="cancel" className={this.state.usernameEdit ? 'show' : 'hide'} onClick={this.toggleUsernameEdit} />
                    <img
                        src={checkSVG}
                        alt="check"
                        className={this.state.usernameEdit ? 'show' : 'hide'}
                        onClick={() => {
                            this.props.updateProfile({ username: this.state.username });
                            this.props.fetchProfile();
                            this.toggleUsernameEdit();
                        }}
                    />{' '}
                </SDInputDiv>
                <SDInfo className={this.state.usernameEdit ? 'hide' : 'show'}>
                    {this.props.username} <img src={pen} alt="pen" onClick={this.toggleUsernameEdit} />{' '}
                </SDInfo>
                <SDLabelRow>Phone number:</SDLabelRow>
                <SDInputDiv>
                    <SDInput name="phone_number" value={this.state.phone_number} className={this.state.phoneEdit ? 'show' : 'hide'} onChange={e => this.handeInput(e)} />
                    <img src={xSVG} alt="cancel" className={this.state.phoneEdit ? 'show' : 'hide'} onClick={this.togglePhoneEdit} />
                    <img
                        src={checkSVG}
                        alt="check"
                        className={this.state.phoneEdit ? 'show' : 'hide'}
                        onClick={() => {
                            this.props.updateProfile({ phone_number: this.state.phone_number });
                            this.props.fetchProfile();
                            this.togglePhoneEdit();
                        }}
                    />{' '}
                </SDInputDiv>
                <SDInfo className={this.state.phoneEdit ? 'hide' : 'show'}>
                    {this.props.phone_number}
                    <img src={pen} alt="pen" onClick={this.togglePhoneEdit} />
                </SDInfo>
                <SDLabelRow>Email:</SDLabelRow>
                <SDInputDiv>
                    <SDInput name="email" value={this.state.email} className={this.state.emailEdit ? 'show' : 'hide'} onChange={e => this.handeInput(e)} />
                    <img src={xSVG} alt="cancel" className={this.state.emailEdit ? 'show' : 'hide'} onClick={this.toggleEmailEdit} />
                    <img
                        src={checkSVG}
                        alt="check"
                        className={this.state.emailEdit ? 'show' : 'hide'}
                        onClick={() => {
                            this.props.updateProfile({ email: this.state.email });
                            this.props.fetchProfile();
                            this.toggleEmailEdit();
                        }}
                    />{' '}
                </SDInputDiv>
                <SDInfo className={this.state.emailEdit ? 'hide' : 'show'}>
                    {this.props.email}
                    <img src={pen} alt="pen" onClick={this.toggleEmailEdit} />
                </SDInfo>
            </SDProfileBlock>
        );
    }
}

const SDProfileBlock = styled.div`
    width: 100%;
    height: 45vh;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-bottom: 50px;
    padding-top: 50px;
    background-color: white;
    font-size: 1.5rem;
    justify-content: center;
    line-height: 2;
    border: 1px solid ${Colors.Primary};
    .hide {
        display: none;
    }
    .show {
        display: block;
    }
    button:focus,
    input:focus {
        outline: none;
    }
`;

const SDLabelRow = styled.div`
    font-size: 1.5rem;
    color: ${Colors.Primary};
    font-weight: bold;
`;

const SDInfo = styled.div`
    display: flex;
    align-items: center;
    img {
        margin-left: 10px;
        width: 20px;
        cursor: pointer;
    }
`;

const SDInput = styled.input`
    box-sizing: border-box;
    font-size: 1.5rem;
    color: gray;
    border: none;
    margin-bottom: 10px;
    border-bottom: 1px solid ${Colors.Primary};
`;

const SDInputDiv = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 20px;
        height: 20px;
        margin: 0 10px 0px 5px;
        cursor: pointer;
    }
`;
