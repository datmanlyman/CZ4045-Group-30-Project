import { useState } from 'react';

const Dropdown = () => {
    const [open, setOpen] = useState(False);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className='dropdown'>
            <button></button>
        </div>
    );
};

export default Dropdown;