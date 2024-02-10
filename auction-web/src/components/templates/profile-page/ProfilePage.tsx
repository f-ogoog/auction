import { Box } from "@mui/material";

import UserInfo from "./components/user-info";
import Pagination from "@/components/common/ui/pagination";

import * as styles from "./ProfilePage.styles";
import { ProfileCategories } from "@/app/profile/page";
import MyProfile from "./components/my-profile";
import EditProfile from "./components/edit-profile";
import Settings from "./components/settings";

interface ProfilePageParams {
  searchParams: {
    category: ProfileCategories;
  };
}

const ProfilePage = ({ searchParams }: ProfilePageParams) => {
  const categories = Object.values(ProfileCategories);
  const currentCategory = categories.includes(searchParams.category)
    ? searchParams.category
    : ProfileCategories.PROFILE;

  const items = categories.map((category, index) => ({
    isActive: category === currentCategory,
    text: category,
    category: categories[index],
  }));

  return (
    <Box sx={styles.stack}>
      <UserInfo />
      <Pagination items={items} />
      {currentCategory === ProfileCategories.PROFILE ? (
        <MyProfile />
      ) : currentCategory === ProfileCategories.EDIT_PROFILE ? (
        <EditProfile />
      ) : (
        <Settings />
      )}
    </Box>
  );
};

export default ProfilePage;
