import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../axios/api";
// import { Link } from 'react-router-dom'
import { styleProps } from "./styleProps";

export const Login = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  const { loginForm, loginLabel, lastRow, loginInput, loginButton } = styleProps;
  
  const [showPassword, setShowPassword] = useState(false);
  const [inputsFilled, setInputsFilled] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  
  const handleShowClick = () => setShowPassword(!showPassword);

  const handlePostLogin = async () => {
    if(form.email.length !== 0 && form.password.length !== 0) {
      await loginUser(form).then((res: any) => {
        const accessToken = res?.data?.accessToken
        if (accessToken) {
          localStorage.setItem('accessToken', accessToken)
          return navigate('/dashboard')
        }
      })
      .catch(
        (error: any) => console.log(error)
      )
    }
  };

  const handleChange = (event: any) => {
    if (event.target.value.length === 0) {
      setInputsFilled(false)
    }
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
    if(form.email.length > 0 && form.password.length > 0) {
      setInputsFilled(true);
    } else {
      setInputsFilled(false);
    }
  };

  return (
    <Box {...loginForm}>
      <FormLabel {...loginLabel}>
        {intl.formatMessage({ id: "LOGIN.BUTTON" })}
      </FormLabel>
      <Input
        {...loginInput}
        placeholder={intl.formatMessage({
          id: "LOGIN.INPUT.EMAIL.PLACEHOLDER",
        })}
        type="email"
        id='email'
        onChange={handleChange}
      />
      <Input
        {...loginInput}
        placeholder={intl.formatMessage({
          id: "LOGIN.INPUT.PASSWORD.PLACEHOLDER",
        })}
        type="password"
        id='password'
        onChange={handleChange}
      />
      <HStack {...lastRow}>
        <Button 
          style={{opacity: `${inputsFilled ? '1' : '0.5'}` }}
          {...loginButton} 
          onClick={handlePostLogin}
        >
          {/* {showPassword ? "Hide" : "Show"} */}
          {intl.formatMessage({ id: "LOGIN.BUTTON" })}
        </Button>
        <FormLabel>
          {intl.formatMessage({ id: "LOGIN.FORGOT_PASSWORD" })}
        </FormLabel>
      </HStack>
    </Box>
  );
};
