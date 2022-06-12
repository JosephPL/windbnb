import { useContext } from 'react';
import data from '../assets/stays.json';
import { AppContext } from '../context/AppProvider';
import Card from './Card';

const CardFilter = () => {

    
    const {location} = useContext(AppContext);

    return (
        <div className='cardContainer'>
            {data.map((item, index) => {
                if(item.city === location){

                  return (
                    <Card 
                        key={index}
                        city={item.city}
                        superHost={item.superHost}
                        photo={item.photo}
                        rating={item.rating}
                        title={item.title}
                        type={item.type}
                        beds={item.beds}
                        maxGuests={item.maxGuests}
                      />       
                  )
                }
              })
            }
        </div>
    )
};

export default CardFilter;