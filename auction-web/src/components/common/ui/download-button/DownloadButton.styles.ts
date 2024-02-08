import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

export const buttonContainer: SxProps<Theme> = {
    paddingTop: '32px',
    paddingBottom: '32px',
};

export const textContainer: SxProps<Theme> = {
    marginBottom: '16px',
};

export const buttonContent: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'none',
    borderRadius: "32px",
    outline: "3px solid",
    outlineColor: "gray.900",
    backgroundColor: "white",
    "& .MuiTypography-root": textContainer,
};
export const description: SxProps<Theme> = {
    color: "gray.200",
};

export const svgContainer: SxProps<Theme> = {
    marginBottom: "16px",
    marginTop: "16px",
}

export const title: SxProps<Theme> = {
    color: "black",
}
