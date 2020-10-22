import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';

interface IEditProps {
  form?: any;
  carousel: any;
}
class Edit extends Component<IEditProps, any> {
  handleSubmit() {
    return this.props.form.validateFieldsAndScroll((err: any) => {
      if (!err) {
        return this.props.form.getFieldsValue();
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Form.Item>
          {getFieldDecorator('c_img_title', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='标题'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('c_img_url', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='图片'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('c_img_des', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='描述'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('c_type', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='状态'
            />
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create<any>({
  name: 'EDEIT_FORM',
  mapPropsToFields(props) {
    return {
      c_img_title: Form.createFormField({
        value: props.carousel.c_img_title
      }),
      c_img_url: Form.createFormField({
        value: props.carousel.c_img_url
      }),
      c_img_des: Form.createFormField({
        value: props.carousel.c_img_des
      }),
      c_type: Form.createFormField({
        value: props.carousel.c_type
      })
    };
  }
})(Edit);
