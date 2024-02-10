import React from "react";
import { Box, Typography } from "@mui/material";
import RegisterForm from "./register-form";
import * as styles from "./RegisterPage.styles";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <Box sx={styles.container}>
      <RegisterForm />
      <Typography variant="body2">
        Already have account?{" "}
        <Link href={"/login"}>
          <Typography variant="body2" color="primary.main" component="span">
            Login
          </Typography>
        </Link>
      </Typography>
    </Box>
  );
};

export default RegisterPage;
