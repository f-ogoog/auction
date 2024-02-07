import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

export const root: SxProps<Theme> = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
        padding: '0px 8px',
        stroke: '2px solid #EAEAEA',
        width: '450px'
    },
};