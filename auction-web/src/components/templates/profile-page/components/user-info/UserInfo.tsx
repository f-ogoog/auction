"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

import * as styles from "./UserInfo.styles";
import Image from "next/image";
import useAuth from "@/hooks/use-auth";

const UserInfo = () => {
  const { user } = useAuth();

  const getRandAvatar = () => {
    const avatars = [
      "avatar1.webp",
      "avatar2.webp",
      "avatar3.webp",
      "avatar4.webp",
      "avatar5.webp",
      "avatar6.jpeg",
      "avatar7.webp",
    ];

    const randIndex = Math.floor(Math.random() * avatars.length);
    return avatars[randIndex];
  };

  return (
    <Box sx={styles.row}>
      <Box sx={styles.imageContainer}>
        <Image
          src={user?.avatar || `/images/avatars/${getRandAvatar()}`}
          alt={user.username}
          objectFit="cover"
          fill
        />
      </Box>
      <Box sx={styles.stack}>
        <Typography variant="h4" whiteSpace="pre-wrap">
          {user.firstName} {user.lastName} {`\n`} {user.middleName}
        </Typography>
        <Typography variant="body2" color="gray.200">
          @{user.username}
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(UserInfo);
