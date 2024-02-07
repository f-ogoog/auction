import { Box, Container, Typography } from "@mui/material";
import NextLink from "next/link";

import * as styles from "./Header.styles";
import { links } from "./constants";
import Link from "./link";

const Header = () => {
  return (
    <Box component="header" sx={styles.header}>
      <Container>
        <Box sx={styles.row}>
          <NextLink href="/">
            <Typography variant="h3" color="white.main">
              Generous
            </Typography>
          </NextLink>
          <Box sx={styles.nav} component="nav">
            {links.map((link) => (
              <Link href={link.href} label={link.label} key={link.label} />
            ))}
          </Box>
          <Link href="/profile" label="My Profile" bold />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
