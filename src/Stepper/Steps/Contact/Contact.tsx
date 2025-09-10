import { BackButton, Card, ErrorMsg, FormLabel } from '../../../common';
import { Button, Form, Input } from 'antd';
import { useContext, useEffect } from 'react';

import CLASSES from './Contact.module.css';
import { SERVICES } from '../../../../constants';
import { StepsContext } from '../../../context';
import { useFetchApi } from '../../../common-hooks';

const Contact = () => {
  const { sendDetails, reservation } = useContext(StepsContext) as unknown;
  const [form] = Form.useForm();

  const { fetchData, postReservation, postReservationPending, postReservationError } = useFetchApi(
    SERVICES.postReservation
  );

  useEffect(() => {
    if (postReservationError) console.error(postReservationError);
    else if (postReservation) console.log(postReservation);
  }, [postReservationError]);

  return (
    <>
      <BackButton name="SELECT A NEW DATE" />
      <Card className={CLASSES.cardContainer} title="Tell us about you">
        <Form
          loading={postReservationPending}
          form={form}
          onFinish={(values) => {
            sendDetails(values);
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
          <Form.Item label={null} className={CLASSES.btnContainer}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => {
                fetchData(reservation);
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default Contact;
