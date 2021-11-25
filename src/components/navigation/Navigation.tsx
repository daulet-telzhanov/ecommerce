import React from 'react';
import SelectForm from '../fields/select/Select';

const Navigation = () => (
    <div>
        <SelectForm
            options={[
                {
                    name: '12',
                    value: '10',
                },
            ]}
        />
    </div>
);

export default Navigation;
