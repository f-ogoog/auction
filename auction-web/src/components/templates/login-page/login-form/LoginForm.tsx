"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormHelperText } from "@mui/material";
import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/input";

import { validationSchema } from "./validation";
import { LoginFormFields } from "./types";

import AuthService from "@/lib/api/services/auth/AuthService";
import getErrorMessage from "@/lib/utils/getErrorMessage";

import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<LoginFormFields>({
    resolver: zodResolver(validationSchema),
  });

  const [isSent, setIsSent] = useState(false);

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSent(true);
      await AuthService.login(data);
      await router.push("/");
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
        label="username"
        {...register("username")}
        error={errors.username?.message}
      />
      <Input
        id="password"
        label="password"
        {...register("password")}
        type="password"
        error={errors.password?.message}
      />
      <Button text="Login" type="submit" disabled={isSent} />
      {errors.root?.message && (
        <FormHelperText error>{errors.root.message}</FormHelperText>
      )}
    </form>
  );
};

export default LoginForm;
