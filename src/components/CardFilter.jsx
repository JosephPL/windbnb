import data from '../assets/stays.json';
import Card from './Card';

const CardFilter = () => {

    return (
        <div className='cardContainer'>
            {data.map((item, index) => {
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
              })
            }
        </div>
    )
};

export default CardFilter;