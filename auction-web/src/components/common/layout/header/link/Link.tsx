"use client";

import React from "react";
import NextLink from "next/link";

import * as styles from "./Link.styles";
import { Typography } from "@mui/material";
import { usePathname } from "next/navigation";

interface LinkProps {
  href: string;
  label: string;
  bold?: boolean;
}

const Link: React.FC<LinkProps> = ({ href, label, bold }) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <NextLink href={href}>
      <Typography sx={styles.link(active, bold)}>{label}</Typography>
    </NextLink>
  );
};

export default Link;
