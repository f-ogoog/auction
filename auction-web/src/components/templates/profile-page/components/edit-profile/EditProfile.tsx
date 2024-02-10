"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, FormHelperText, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/form/input";
import DownloadInput from "@/components/common/ui/form/download-input";

import { validationSchema } from "./validation";
import { EditProfileFields } from "./types";

import getErrorMessage from "@/lib/utils/getErrorMessage";

import styles from "./EditProfile.module.scss";
import * as sxStyles from "./EditProfile.styles";
import UserApi from "@/lib/api/user/UserApi";
import useAuth from "@/hooks/use-auth";

const EditProfile = () => {
  const {
    handleSubmit,
    control,
    reset,
    register,
    formState: { errors },
    setError,
  } = useForm<EditProfileFields>({
    resolver: zodResolver(validationSchema),
  });

  const [isSent, setIsSent] = useState(false);
  const [avatar, setAvatar] = useState<File>();
  const { user, update } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("body", JSON.stringify(data));
    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      setIsSent(true);
      await UserApi.updateMe(formData);
      await update().then(() =>
        reset({
          avatar: "",
          firstName: user.firstName,
          lastName: user.lastName,
          middleName: user.middleName,
        })
      );
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      setError("root", { message });
    } finally {
      setIsSent(false);
    }
  });

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Box sx={sxStyles.row}>
        <Controller
          name="avatar"
          render={() => <DownloadInput onChange={setAvatar} />}
          control={control}
        />
        <Box sx={sxStyles.column}>
          <Typography variant="h4">Avatar</Typography>
          <Typography variant="body2" whiteSpace="pre-wrap" color="gray.200">
            Your profile picture.{"\n"}It will be displayed on the site.
          </Typography>
          {errors.avatar?.message && (
            <FormHelperText error>
              {errors.avatar?.message as string}
            </FormHelperText>
          )}
        </Box>
      </Box>
      <Input
        id="firstName"
        label="First Name"
        {...register("firstName")}
        defaultValue={user?.firstName}
        error={errors.firstName?.message}
      />
      <Input
        id="lastName"
        label="Last Name"
        {...register("lastName")}
        error={errors.lastName?.message}
        defaultValue={user?.lastName}
      />
      <Input
        id="middleName"
        label="Middle Name"
        {...register("middleName")}
        defaultValue={user?.middleName}
        error={errors.middleName?.message}
      />
      <Button
        text="Save changes"
        icon={<ArrowForwardIosIcon />}
        type="submit"
        disabled={isSent}
      />
      {errors.root?.message && (
        <FormHelperText error>{errors.root.message}</FormHelperText>
      )}
    </form>
  );
};

export default EditProfile;
