import { Button, Form, Input } from 'antd';
import CLASSES from './Contact.module.css';
import { BackButton, Card, ErrorMsg, FormLabel } from '../../../common';
import { useContext, useState } from 'react';
import { StepsContext } from '../../../context';

const Contact = () => {
  const { sendDetails } = useContext(StepsContext) as any;
  const [otpAppears, setOtpAppears] = useState(false);
  const [form] = Form.useForm();

  return (
    <>
      <BackButton name="SELECT A NEW DATE" />
      <Card className={CLASSES.cardContainer} title="Tell us about you">
        <Form
          form={form}
          onFinish={(values) => {
            sendDetails(values);
            setOtpAppears(() => true);
          }}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label={<FormLabel message="Full Name" />}
            rules={[
              { required: true, message: <ErrorMsg message="Please provide your real name" /> },
              {
                pattern: /^[A-Z Α-ΩΆΌΏΊΉΈΎ]+$/i,
                message: <ErrorMsg message="Please provide your real name" />,
              },
            ]}
          >
            <Input className={CLASSES.input} variant="outlined" />
          </Form.Item>
          <Form.Item
            required
            name="phone"
            label={<FormLabel message="Phone" />}
            rules={[
              { required: true, message: <ErrorMsg message="Please provide your phone" /> },
              {
                pattern: /^[0-9]{10}$/,
                message: <ErrorMsg message="Please exactly 10 numbers" />,
              },
            ]}
          >
            <Input className={CLASSES.input} prefix="+30" />
          </Form.Item>
          <Form.Item
            required
            name="email"
            label={<FormLabel message="E-mail" />}
            rules={[
              {
                required: true,
                message: <ErrorMsg message="Please provide your email" />,
              },
              {
                type: 'email',
                message: <ErrorMsg message="Please provide a valid email" />,
              },
            ]}
          >
            <Input className={CLASSES.input} />
          </Form.Item>
          <Form.Item name="comment" label={<FormLabel message="Comment" />}>
            <Input.TextArea className={CLASSES.input} />
          </Form.Item>
          {otpAppears && (
            <>
              <Form.Item>
                <Input.OTP title="Check your phone for a real " />
              </Form.Item>
            </>
          )}
          {otpAppears === false && (
            <Form.Item className={CLASSES.btnContainer}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          )}
        </Form>
      </Card>
    </>
  );
};

export default Contact;
