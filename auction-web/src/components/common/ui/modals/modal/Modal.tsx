import { Box, Modal as MUIModal, SxProps, Theme } from "@mui/material";
import * as styles from "./Modal.styles";
import CloseIcon from "@mui/icons-material/Close";
import mergeSx from "@/lib/utils/mergeSx";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const Modal: React.FC<ModalProps> = ({
  open,
  children,
  handleClose,
  sx = {},
}) => {
  if (!open) return null;

  return (
    <MUIModal open={open} onClose={handleClose}>
      <Box sx={styles.modal}>
        <Box sx={mergeSx(styles.container, sx)}>
          <CloseIcon onClick={handleClose} sx={styles.closeIcon} />
          {children}
        </Box>
      </Box>
    </MUIModal>
  );
};

export default Modal;
