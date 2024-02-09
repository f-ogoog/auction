import React from "react";
import { Box } from "@mui/material";
import RegisterForm from "./register-form";
import * as styles from "./RegisterPage.styles";

const RegisterPage = () => {
  return (
    <Box sx={styles.container}>
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;
