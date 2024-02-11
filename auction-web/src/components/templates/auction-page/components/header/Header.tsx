import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import * as styles from "./Header.styles";
import Image from "next/image";
import { User } from "@/types/user";
import UserApi from "@/lib/api/user/UserApi";
import { AuctionCategory } from "@/types/auction-category";

interface HeaderProps {
  avatar: string | null;
  name: string;
  category: AuctionCategory;
  userId: string;
}

const Header: React.FC<HeaderProps> = ({ category, name, userId, avatar }) => {
  const [seller, setSeller] = useState<User>();

  useEffect(() => {
    UserApi.getUser(userId).then((user) => setSeller(user));
  }, [userId]);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.avatarContainer}>
        {avatar !== null && (
          <Image src={avatar} alt={name} objectFit="cover" fill />
        )}
      </Box>
      <Box sx={styles.infoContainer}>
        <Box sx={styles.text}>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="body2">Category {category}</Typography>
        </Box>
        <Box sx={styles.sellerCard}>
          <Box sx={styles.sellerAvatarContainer}>
            {seller?.avatar && (
              <Image
                src={seller.avatar}
                alt={seller.username}
                objectFit="cover"
                fill
              />
            )}
          </Box>
          <Box sx={styles.sellerText}>
            <Typography variant="body2" color="gray.300">
              Seller
            </Typography>
            <Typography variant="h4">
              {seller?.firstName} {seller?.lastName}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
