import React from 'react';
import SelectForm from '../fields/select/Select';

const Navigation = () => (
    <header>
        <SelectForm
            options={[
                {
                    name: '12',
                    value: '10',
                },
            ]}
        />
    </header>
);

export default Navigation;
