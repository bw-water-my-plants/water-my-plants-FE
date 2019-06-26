import React from 'react';

import 'antd/dist/antd.css';

import { Form, Icon, Input, Button } from 'antd';
import Password from 'antd/lib/input/Password';

class HorizontalLoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            Password: ""
        }
    }

    onChange = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value 
        })
  
    }


  render() {
    return (
      <Form layout="inline">
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username" value={this.state.username} onChange={this.onChange}
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              value={this.state.Password}
              onChange={this.onChange}
            />
        </Form.Item>
        <Form.Item>
          <Button type="primary">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

 export const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

