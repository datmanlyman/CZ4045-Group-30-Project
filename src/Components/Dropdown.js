import React, { useContext } from 'react';
import { companies }  from './Companies';
import { DropdownContext } from '../Utils/DropdownContext';

export const Dropdown = () => {
    const {open, setOpen, display, setDisplay} = useContext(DropdownContext);

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