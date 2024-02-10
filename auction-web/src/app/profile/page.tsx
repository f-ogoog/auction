import PageLayout from "@/components/common/layout/page-layout";
import ProfilePage from "@/components/templates/profile-page";

export enum ProfileCategories {
  PROFILE = "My Profile",
  EDIT_PROFILE = "Edit My Profile",
  SETTINGS = "Settings",
}

interface ProfileParams {
  searchParams: {
    category: ProfileCategories;
  };
}

const Profile = ({ searchParams }: ProfileParams) => {
  return (
    <PageLayout>
      <ProfilePage searchParams={searchParams} />
    </PageLayout>
  );
};

export default Profile;
