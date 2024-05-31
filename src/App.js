// src/App.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from './components/Container';
import LoginBox from './components/LoginBox';
import Title from './components/Title';
import Input from './components/Input';
import Button from './components/Button';
import ErrorMessage from './components/ErrorMessage';
import Divider from './components/Divider';
import SmallText from './components/SmallText';

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isValid, setIsValid] = useState(true);

  const onSubmit = data => {
    console.log('Welcome');
  };

  const emailOrMobile = watch('emailOrMobile');

  const validateEmailOrMobile = value => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^\d{10}$/;
    const valid = emailPattern.test(value) || mobilePattern.test(value);
    setIsValid(valid);
    return valid;
  };

  return (
    <Container>
      <LoginBox>
        <Title>Login to Dashboard</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Email or Mobile Number"
            error={errors.emailOrMobile || !isValid}
            {...register('emailOrMobile', { required: true, validate: validateEmailOrMobile })}
          />
          {!isValid && <ErrorMessage>Enter a valid email or mobile number</ErrorMessage>}
          <Button type="submit" disabled={!validateEmailOrMobile(emailOrMobile)}>Next</Button>
        </form>
        <Divider>or</Divider>
        <Button as="a" href="/google-sign-in">Sign in with Google</Button>
        <SmallText>Protected by reCAPTCHA Google. Privacy Policy & Terms of Service apply.</SmallText>
      </LoginBox>
    </Container>
  );
}

export default App;
