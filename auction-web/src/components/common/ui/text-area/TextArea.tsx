import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import * as styles from './TextArea.styles';

interface TextAreaProps {
    disabled?: boolean;
    placeholder?: string;
    required?: boolean;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ disabled = false, placeholder, required, value, onChange }) => {
    return (
        <TextField
            disabled={disabled}
            sx={styles.root}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <KeyboardIcon />
                    </InputAdornment>
                )
            }}
        />
    );
};

export default TextArea;
