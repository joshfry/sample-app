import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import uniqueId from 'lodash/uniqueId';

const PostsForm = ({ hideModal }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const post = {
      id: uniqueId(10),
      ...values,
    };

    // TODO: sdave new post
    console.log(post);

    hideModal();
  };

  return (
    <Form
      name="new-post"
      layout="vertical"
      validateMessages={{
        required: '${label} is required.', // eslint-disable-line
        types: { number: '${label} is not a valid number.' }, // eslint-disable-line
      }}
      form={form}
      onFinish={onFinish}
      initialValues={{ body: '' }}
    >
      <Input.Group compact>
        <Form.Item
          name="userId"
          label="User Id"
          rules={[{ required: true, type: 'number', min: 0 }]}
        >
          <InputNumber style={{ width: 150 }} />
        </Form.Item>
        <Form.Item
          name="Id"
          label="id"
          rules={[{ required: true, type: 'number', min: 0 }]}
          style={{ margin: '0 1rem' }}
        >
          <InputNumber style={{ width: 150 }} />
        </Form.Item>
      </Input.Group>
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="body" label="Body">
        <Input.TextArea rows={7} />
      </Form.Item>
      <Form.Item style={{ marginBottom: '0' }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button
          htmlType="button"
          style={{ margin: '0 8px' }}
          onClick={() => {
            form.resetFields();
            hideModal();
          }}
        >
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PostsForm;
