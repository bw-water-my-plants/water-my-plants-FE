import React from "react";
import 'antd/dist/antd.css';
import styled from "styled-components";
import { Link } from "react-router-dom";




import {
    Form,
    Input,
    Tooltip,
    Icon,
    InputNumber,
   
    Button,

  } from 'antd';
  
 
  const Overall = styled.div`
    margin: 0 auto;
    padding-top: 200px;
    width: 500px;
    @media (max-width: 600px){
      width:300px;
    }
  `
  

  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = e => {
      e.preventDefault();

      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
        
            this.props.userSignupRequest(values)
            this.props.form.resetFields()
            
        }
        
        
      });
     
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
  
  
    render() {
      const { getFieldDecorator } = this.props.form;
    
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      
      
      return (
        <Overall>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          
          <Form.Item
            label={
              <span>
                Username&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
            })(<Input />)}
          </Form.Item>
          
          <Form.Item label="Phone number">
            {getFieldDecorator('phone_number', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<InputNumber min={1} max={10000000000} style={{ width: '100%' }} />)}
          </Form.Item>
          
          
         
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" >
              Register
            </Button>
            Or <Link to="/login">Login</Link>
          </Form.Item>
        </Form>

        </Overall>
      );
    }
  }
  
  export const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
