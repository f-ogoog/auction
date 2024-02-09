"use client";

import CreateButton from "@/components/common/ui/create-button";
import { Plus } from "@/components/common/ui/plus-button/types";

const HomePage = () => {
  return <CreateButton type={Plus.SLOT} onClick={() => "Hello world"} />;
};

export default HomePage;
