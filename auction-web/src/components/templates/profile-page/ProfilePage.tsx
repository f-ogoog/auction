import { Box } from "@mui/material";

import * as styles from "./ProfilePage.styles";
import UserInfo from "./components/user-info";

const ProfilePage = () => {
  return (
    <Box sx={styles.stack}>
      <UserInfo />
    </Box>
  );
};

export default ProfilePage;
