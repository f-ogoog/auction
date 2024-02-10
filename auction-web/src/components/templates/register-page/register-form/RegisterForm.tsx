"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, FormHelperText, Typography } from "@mui/material";

import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/form/input";

import { validationSchema } from "./validation";
import { RegisterFormFields } from "./types";

import AuthApi from "@/lib/api/auth/AuthApi";
import getErrorMessage from "@/lib/utils/getErrorMessage";

import styles from "./RegisterForm.module.scss";
import * as sxStyles from "./RegisterForm.styles";

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<RegisterFormFields>({
    resolver: zodResolver(validationSchema),
  });

  const [isSent, setIsSent] = useState(false);

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSent(true);
      await AuthApi.register(data);
      await router.push("/login");
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      setError("root", { message });
    } finally {
      setIsSent(false);
    }
  });

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Input
        id="username"
        label="Username"
        {...register("username")}
        error={errors.username?.message}
      />
      <Input
        id="firstName"
        label="First Name"
        {...register("firstName")}
        error={errors.firstName?.message}
      />
      <Input
        id="lastName"
        label="Last Name"
        {...register("lastName")}
        error={errors.lastName?.message}
      />
      <Input
        id="middleName"
        label="Middle Name"
        {...register("middleName")}
        error={errors.middleName?.message}
      />
      <Input
        id="password"
        label="Password"
        {...register("password")}
        type="password"
        error={errors.password?.message}
      />
      <Button text="Register" type="submit" disabled={isSent} />
      {errors.root?.message && (
        <FormHelperText error>{errors.root.message}</FormHelperText>
      )}
    </form>
  );
};

export default RegisterForm;
