import React from "react";
import {
    FormControl,
    FormHelperText,
    InputLabel,
    OutlinedInput,
} from "@mui/material";

interface InputProps {
    label: string;
    id: "username" | "password" | "firstName" | "lastName" | "middleName" | "min-price";
    type?: "text" | "password" | "number";
    error?: string;
    defaultValue?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;  // Add this line
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, id, error, type = "text", defaultValue, placeholder, onChange, ...props }, ref) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
                onChange(event);
            }
        };

        return (
            <FormControl>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <OutlinedInput
                    id={id}
                    label={label}
                    aria-describedby={`${id}-error-text`}
                    ref={ref}
                    type={type}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    onChange={handleChange}
                    {...props}
                />
                {error && (
                    <FormHelperText id={`${id}-error-text`} error>
                        {error}
                    </FormHelperText>
                )}
            </FormControl>
        );
    }
);

Input.displayName = 'Input';
export default Input;
