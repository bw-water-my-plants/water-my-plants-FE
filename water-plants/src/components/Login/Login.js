import React from "react";
import styled from "styled-components"

import { Form, Icon, Input, Button } from 'antd';
import { Link } from "react-router-dom";


const Overall = styled.div`
    margin: 0 auto;
    padding-top: 200px;
    width: 500px;
    @media (max-width: 600px){
      width: 300px;
    }
  `

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values.email, values.password)
      
          this.props.form.resetFields()
                               
        .then(() => {
          let route = '/';
          if (this.props.location.state) {
             route = this.props.location.state.from || '/';
          }
          this.props.history.push(route);
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Overall>

      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" >
            Log in
          </Button>
          Or <Link to="/signup">register now!</Link>
        </Form.Item>
      </Form>
        </Overall>
    );
  }
}

export const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);