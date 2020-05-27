import { Form, Input, Button, Checkbox } from "antd";
import React, { useEffect } from "react";
import CustomInput from "./CustomForm/CustomInput";
import CustomInputPassword from "./CustomForm/CustomInputPassword";
import CustomInputFloatingLabel from "./CustomForm/CustomInputFloatingLabel";
import CustomInput2 from "./CustomForm/CustomInput2";

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
    <>
      <h1>CustomForm</h1>
      <Form
        {...layout}
        name="basic"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="CustomInput2"
          name="CustomInput2"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <CustomInput2 />
        </Form.Item>

        <Form.Item
          label="CustomInputFloatingLabel"
          name="CustomInputFloatingLabel"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <CustomInputFloatingLabel />
        </Form.Item>

        <Form.Item
          label="CustomInput"
          name="CustomInput"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <CustomInput />
        </Form.Item>

        <Form.Item
          label={
            <div>
              CustomPassword with <b>Regex</b> pattern
            </div>
          }
          name="CustomPassword"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              pattern: /.{8,32}$/,
            },
          ]}
        >
          <CustomInputPassword placeholder="With comparison" />
        </Form.Item>

        <Form.Item
          name="confirmCustomInputPassword"
          label="Confirm CustomInputPassword"
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
          label="E-mail validation"
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
          label="Label in the left"
          labelAlign="left"
          name="leftLabel"
          rules={[{ required: true, message: "Label in the left!" }]}
        >
          <Input placeholder="Label in the left!" />
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
    </>
  );
};

export default CustomForm;
