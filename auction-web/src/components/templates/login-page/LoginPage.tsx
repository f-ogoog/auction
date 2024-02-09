import React from "react";
import { Box } from "@mui/material";
import LoginForm from "./login-form";
import * as styles from "./LoginPage.styles";

const RegisterPage = () => {
  return (
    <Box sx={styles.container}>
      <LoginForm />
    </Box>
  );
};

export default RegisterPage;
