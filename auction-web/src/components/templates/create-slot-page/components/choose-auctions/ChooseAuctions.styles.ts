import {SxProps, Theme} from "@mui/material";

export const typography: SxProps<Theme> = {
    color: "black",
    paddingBottom: "16px",
}
export const link: SxProps<Theme> = {
    ...typography,
    textDecoration: "underline",
}

export const card: SxProps<Theme> = {
    borderRadius: "32px",
    height: "484px",
}
export const selectedCard = {
    ...card,
    border: '2px solid #007bff',
};

export const container: SxProps<Theme> = {
    gap: "32px",
    padding: "64px 128px",
    color: "white.main",
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0px 5px 10px 0px #00000026',
    marginTop: "40px",
    marginBottom: "32px",
    borderRadius: "32px",
}
export const button: SxProps<Theme> = {
    width: "42%",
    padding: "16px",
}

export const buttonDisabled: SxProps<Theme> = {
    width: "100%",
    paddingTop: "16px",
}

export const imageContainer: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
}

export const modal: SxProps<Theme> = {
    width: "1095px",
    height: "578px",
}

export const modal2: SxProps<Theme> = {
    width: "800px",
    height: "862px",
}
