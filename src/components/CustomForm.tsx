import { Form, Input, Button, Checkbox, Tooltip, Select } from 'antd';
import React, { useEffect } from 'react';
import CustomInput from './CustomForm/CustomInput';
import CustomInputPassword from './CustomForm/CustomInputPassword';
import CustomInputFloatingLabel from './CustomForm/CustomInputFloatingLabel';
import CustomInput2 from './CustomForm/CustomInput2';
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import CustomSelect from './CustomForm/CustomSelect';

const { Option } = Select;

const childrenSelector: Array<any> = [];
for (let i = 10; i < 36; i++) {
  childrenSelector.push(
    <Option key={i.toString(36) + i} value={i.toString(36) + i}>
      {i.toString(36) + i}
    </Option>
  );
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  // layout for btn Submit in the tail of form
  wrapperCol: {
    offset: 8, // turn off layout
    span: 16,
  },
};

const CustomForm = () => {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    // below is to create form, but not trigger to re-rendering
    // form.setFieldsValue({ username: "demo" });
  }, [form]);
  // console.log(form.getFieldValue(["username"]));

  return (
    <>
      <h1>
        CustomForm: Target input/select value with property "name" of Form.Item
      </h1>
      <div>
        Docs: using hook `const [form] = Form.useForm()` to create form ref.
        read more code for setting up
      </div>
      <div>
        To set field: form.setFieldsValue(object); object with keys which are
        "name" properties of Form.Item
      </div>
      <div>To get a field: form.getFieldValue(name)</div>
      <div>
        To get many fields: form.getFieldsValue(["customPassword", "email",
        "any"]) => object
      </div>
      {/* FORM 2 */}
      <Form
        {...layout}
        name="basic2"
        form={form2}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h4>Multiple SelectCustom SuffixIcon WithoutLabel</h4>
        <Form.Item
          label=""
          name="MultipleSelectCustomSuffixIconWithoutLabel"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <CustomSelect
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={(values) =>
              console.log(
                form2.getFieldValue(
                  'MultipleSelectCustomSuffixIconWithoutLabel'
                )
              )
            }
            showArrow
            suffixIcon={
              <>
                <div>I</div>
              </>
            }
          >
            {childrenSelector}
          </CustomSelect>
        </Form.Item>

        <div style={{ border: '1px solid red', height: 24 }}>
          add more height: + 24px
        </div>

        <Form.Item
          label="MultipleSelect Custom suffixIcon"
          name="MultipleSelectCustomSuffixIcon"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <CustomSelect
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={(values) =>
              console.log(form2.getFieldValue('MultipleSelectCustomSuffixIcon'))
            }
            showArrow
            suffixIcon={
              <>
                <div>DE</div>
              </>
            }
          >
            {childrenSelector}
          </CustomSelect>
        </Form.Item>

        <Form.Item
          label="MultipleSelect Custom"
          name="MultipleSelectCustom"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <CustomSelect
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={(values) =>
              console.log(form2.getFieldValue('MultipleSelectCustom'))
            }
            showArrow
          >
            {childrenSelector}
          </CustomSelect>
        </Form.Item>

        <Form.Item
          label="MultipleSelect Standard"
          name="MultipleSelectStandard"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Select
            mode="multiple"
            // style={{ width: "100%" }}
            placeholder="Please select"
            // defaultValue={["a10", "c12"]}
            onChange={(values) =>
              console.log(form2.getFieldValue('MultipleSelectStandard'))
            }
            showArrow
          >
            {childrenSelector}
          </Select>
        </Form.Item>

        <Form.Item {...tailLayout} name="remember2" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {/* FORM  */}

      <Form
        {...layout}
        name="basic"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div style={{ border: '1px solid black', marginBottom: '20px' }} />
        <Form.Item
          label="PrefixAndSuffixCustom2"
          name="PrefixAndSuffixCustom2"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <CustomInput
            placeholder="Enter your username"
            prefix="￥"
            suffix="RMB"
          />
        </Form.Item>

        <Form.Item
          label="PrefixAndSuffixCustom"
          name="PrefixAndSuffixCustom"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <CustomInput
            placeholder="Enter your username"
            prefix={<UserOutlined className="site-form-item-icon" />}
            suffix={
              <Tooltip title="Extra information">
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
          />
        </Form.Item>

        <Form.Item
          label="PrefixAndSuffix Standard"
          name="PrefixAndSuffix"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input
            placeholder="Enter your username"
            prefix={<UserOutlined className="site-form-item-icon" />}
            suffix={
              <Tooltip title="Extra information">
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
          />
        </Form.Item>

        <Form.Item
          label="CustomInput2"
          name="CustomInput2"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <CustomInput2 />
        </Form.Item>

        <Form.Item
          label="CustomInputFloatingLabel"
          name="CustomInputFloatingLabel"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <CustomInputFloatingLabel />
        </Form.Item>

        <Form.Item
          label="CustomInput"
          name="CustomInput"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <CustomInput />
        </Form.Item>

        <div style={{ border: '1px solid black', marginBottom: '20px' }} />

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
              message: 'Please input larger than 4!',
              pattern: /.{4,32}$/,
            },
          ]}
        >
          <CustomInputPassword placeholder="With regex pattern" />
        </Form.Item>

        <Form.Item
          name="confirmCustomInputPassword"
          label="Confirm CustomInputPassword"
          // dependencies: if customPassword change, it will trigger validate confirmPassword
          dependencies={['customPassword']}
          // hasFeedback: icons pass validate, or not pass validate
          // hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('customPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  'The two passwords that you entered do not match!'
                );
              },
            }),
          ]}
        >
          <CustomInputPassword placeholder="Two message: one is required, one is not the same as password" />
        </Form.Item>
        <p style={{ color: '#555' }}>
          "Confirm CustomInputPassword" can show two messages: 1 is required
          field, 2 is that not matching to CustomInputPassword
        </p>

        <div style={{ border: '1px solid black', marginBottom: '20px' }} />

        <Form.Item
          name="email"
          label="E-mail validation"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Label in the left"
          labelAlign="left"
          name="leftLabel"
          rules={[{ required: true, message: 'Label in the left!' }]}
        >
          <Input placeholder="Label in the left!" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
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
