"use client";

import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, TextField } from "@mui/material";

import Button from "@/components/common/ui/button";

import { validationSchema } from "./validation";
import { RegisterFormFields } from "./types";

import styles from "./RegisterForm.module.scss";
import Input from "@/components/common/ui/input";

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<RegisterFormFields>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Input
        id="username"
        label="username"
        {...register("username")}
        error={errors.username?.message}
      />
      <Input
        id="firstName"
        label="firstName"
        {...register("firstName")}
        error={errors.firstName?.message}
      />
      <Input
        id="lastName"
        label="lastName"
        {...register("lastName")}
        error={errors.lastName?.message}
      />
      <Input
        id="middleName"
        label="middleName"
        {...register("middleName")}
        error={errors.middleName?.message}
      />
      <Input
        id="password"
        label="password"
        {...register("password")}
        type="password"
        error={errors.password?.message}
      />
      <Button text="Register" type="submit" />
    </form>
  );
};

export default RegisterForm;
