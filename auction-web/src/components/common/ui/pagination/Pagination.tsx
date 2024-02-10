"use client";

import { Box } from "@mui/material";
import React from "react";

import * as styles from "./Pagination.styles";
import Button from "../button";
import { ButtonColor } from "../button/types";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  items: ItemProps[];
}

const Pagination: React.FC<PaginationProps> = ({ items }) => {
  return (
    <Box sx={styles.pagination}>
      {items.map((item: ItemProps) => (
        <Item {...item} key={item.text} />
      ))}
    </Box>
  );
};

export default Pagination;

interface ItemProps {
  isActive: boolean;
  text: string;
  category: string;
}

const Item: React.FC<ItemProps> = ({ isActive, text, category }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClick = (category: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", category.toString());
    router.push("?" + params.toString());
  };

  return (
    <Button
      color={isActive ? ButtonColor.BLACK : ButtonColor.WHITE}
      onClick={() => onClick(category)}
      text={text}
    />
  );
};
