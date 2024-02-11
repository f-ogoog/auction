import { Box } from "@mui/material";
import React from "react";
import * as styles from "./Pagination.styles";

import { Pagination as PaginationType } from "@/types/pagination";
import Button from "@/components/common/ui/button";
import { ButtonColor } from "@/components/common/ui/button/types";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useMarketplaceQueryStore from "@/store/marketplace-page/useMarketplaceQueryStore";

interface PaginationProps extends Omit<PaginationType, "totalAmount"> {}

const Pagination: React.FC<PaginationProps> = ({ totalPages, page }) => {
  const setPage = useMarketplaceQueryStore((s) => s.setPage);

  console.log(page);

  return (
    <Box sx={styles.container}>
      <Box>
        <Button
          icon={<KeyboardArrowLeftIcon />}
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          color={ButtonColor.BLACK}
        />
      </Box>
      <Box sx={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => {
          if (i >= page - 2 && i <= page + 2) {
            return <Item page={i} currentPage={page} key={i} />;
          }
          return null;
        })}
      </Box>
      <Box>
        <Button
          icon={<KeyboardArrowRightIcon />}
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages - 1}
          color={ButtonColor.BLACK}
        />
      </Box>
    </Box>
  );
};

export default Pagination;

interface ItemProps {
  currentPage: number;
  page: number;
}

const Item: React.FC<ItemProps> = ({ page, currentPage }) => {
  const setPage = useMarketplaceQueryStore((s) => s.setPage);

  return (
    <Button
      text={(page + 1).toString()}
      onClick={() => setPage(page)}
      color={page === currentPage ? ButtonColor.BLACK : ButtonColor.WHITE}
    />
  );
};
