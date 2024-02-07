import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import theme from "@/styles/theme";

export const root: SxProps<Theme> = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
        padding: '0px 8px',
        stroke: theme.palette.grey[50],
        width: '450px'
    },
};
