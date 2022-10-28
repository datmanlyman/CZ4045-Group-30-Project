import React, { useState } from 'react';
import { companies }  from './Companies';

export const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const [display, setDisplay] = useState('default');

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleClick = (company) => {
        setDisplay(company);
    }

    return (
        <div className='dropdown'>
            <button onClick={ handleOpen }>Dropdown</button>
            {open ? (
                <ul className='menu1'>
                    <li className='default'><button>Default</button></li>
                    <p><b>Companies</b></p>
                    {companies.map((company, index) => {
                        return (
                            <li className='companyData' key={index} onClick={() => {handleClick(company.name); handleOpen();}}>
                                { company.name }
                            </li>
                    )})}
                    <p><b>Role-based</b></p>
                </ul>
            ) : null }
            <h1>{ display }</h1>
        </div>
    );
};