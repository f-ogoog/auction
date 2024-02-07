"use client";

import Button from "@/components/common/ui/button";
import { ButtonVariant } from "@/components/common/ui/button/types";

export default function Home() {
  return (
    <Button
      text="Click me!"
      variant={ButtonVariant.FILLED}
      onClick={() => console.log("123")}
    />
  );
}
