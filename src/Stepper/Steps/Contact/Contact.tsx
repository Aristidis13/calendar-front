import { Button, Form, Input, Typography } from 'antd';
import CLASSES from './Contact.module.css';
import { BackButton, Card } from '../../../common';
import { ErrorMsg } from '../../../common/ErrorMsg';

const Contact = () => {
  const [form] = Form.useForm();

  return (
    <>
      <BackButton name="SELECT A NEW DATE" />
      <Card className={CLASSES.cardContainer} title="Tell us about you">
        <Form
          form={form}
          onFinish={(values) => {
            console.log(values);
          }}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label={<Typography className={CLASSES.label}>Full name</Typography>}
            rules={[{ required: true, message: <ErrorMsg message="Please provide your name" /> }]}
          >
            <Input className={CLASSES.input} variant="outlined" />
          </Form.Item>
          <Form.Item
            required
            name="phone"
            label={<Typography className={CLASSES.label}>Phone</Typography>}
            rules={[{ required: true, message: <ErrorMsg message="Please provide your phone" /> }]}
          >
            <Input className={CLASSES.input} prefix="+30" />
          </Form.Item>
          <Form.Item
            required
            name="email"
            label={<Typography className={CLASSES.label}>E-mail</Typography>}
            rules={[
              {
                required: true,
                message: (
                  <ErrorMsg message="Please provide your email to know where to send your booking details" />
                ),
              },
            ]}
          >
            <Input className={CLASSES.input} />
          </Form.Item>
          <Form.Item
            name="comment"
            label={<Typography className={CLASSES.label}>Comment</Typography>}
          >
            <Input.TextArea className={CLASSES.input} />
          </Form.Item>
          <Form.Item className={CLASSES.btnContainer}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default Contact;
