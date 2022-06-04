import { useState } from 'react';
import data from '../assets/stays.json'
import Select from 'react-select';

const SelectCity = () => {
    let options = [];
    let city = [];

    for(let i = 0; i < data.length; i++){
        city.includes(data[i].city) || city.push(data[i].city)
    };

    for(let j = 0; j < data.length; j++){
        if(city[0] === data[j].city){
            options.push({value: data[j].city, label: data[j].city + ', ' + data[j].country})
            city.shift()
        }
    }
    
    const [selectedOption, setSelected] = useState('default');
    const handleSelect = ({value}) => {
        setSelected(value)
    };

    return (
            <Select options={options} onChange={handleSelect}/>
    )
};

export default SelectCity;
