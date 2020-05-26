import { Form, Input, Button, Checkbox } from "antd";
import React, { useEffect } from "react";
import CustomInput from "./Form/CustomInput";
import CustomInputPassword from "./Form/CustomInputPassword";
import CustomInputFloatingLabel from "./Form/CustomInputFloatingLabel";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const CustomForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    // below is to create form, but not trigger to re-rendering
    // form.setFieldsValue({ username: "demo" });
  }, [form]);
  // console.log(form.getFieldValue(["username"]));

  return (
    <Form
      {...layout}
      name="basic"
      form={form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="CustomFloating"
        name="custom-floating"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <CustomInputFloatingLabel />
      </Form.Item>

      <Form.Item
        label="Custom"
        name="custom"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <CustomInput />
      </Form.Item>

      <Form.Item
        label="CustomPassword"
        name="customPassword"
        rules={[
          { required: true, message: "Please input your name!" },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || value.length > 6) {
                // !value is to avoid the case of empty input
                return Promise.resolve();
              }
              return Promise.reject(
                "The passwords should include more than 6 character."
              );
            },
          }),
        ]}
      >
        <CustomInputPassword placeholder="With comparison" />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        // dependencies: if customPassword change, it will trigger validate confirmPassword
        dependencies={["customPassword"]}
        // hasFeedback: icons pass validate, or not pass validate
        // hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("customPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            },
          }),
        ]}
      >
        <CustomInputPassword />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
