import React, { FC } from 'react';
import {
    Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import { OptionT } from '../fields';

type SelectFormT = {
    options: OptionT[]
}

const SelectForm:FC<SelectFormT> = ({ options }) => {
    const [age, setAge] = React.useState<string>('');

    const handleChange = (event: SelectChangeEvent<string>) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    {
                        options.length && options.map((opt) => (
                            <MenuItem value={opt.value}>{opt.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectForm;
