import React from "react";
import { Box, Typography } from "@mui/material";
import LoginForm from "./login-form";
import * as styles from "./LoginPage.styles";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <Box sx={styles.container}>
      <LoginForm />
      <Typography variant="body2">
        Doesn&apost have account?{" "}
        <Link href={"/register"}>
          <Typography variant="body2" color="primary.main" component="span">
            Register
          </Typography>
        </Link>
      </Typography>
    </Box>
  );
};

export default RegisterPage;
