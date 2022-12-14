import React, { useContext } from 'react';
import { companies }  from './Companies';
import { DropdownContext } from '../Utils/DropdownContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const CompanyDropdown = () => {
    const {display, setDisplay} = useContext(DropdownContext);

    const handleClick = (company) => {
        setDisplay(company);
    }

    return (
        <DropdownButton className='header' id="company-button" title={display}>
            <Dropdown.Item onClick={() => {handleClick("Overall");}}>Overall</Dropdown.Item>
            {companies.map((company, index) => {
                return (
                    <Dropdown.Item key={index} onClick={() => (handleClick(company.name))}>
                        { company.name }
                    </Dropdown.Item>
                )
            })}
        </DropdownButton>
    );
};