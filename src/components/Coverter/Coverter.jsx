import React from 'react';
import {Input,  Select} from "semantic-ui-react";


export default ({currencyOptions}) => (
    <>
        <div className="currency-group">
            <Input placeholder='Валюта'/>
            <Select placeholder='Валюта' options={currencyOptions}/>
        </div>
        <div className="currency-group">
            <Input placeholder='Валюта'/>
            <Select placeholder='Валюта' options={currencyOptions}/>
        </div>
        <div className="result">
            100 p
        </div>
    </>
);