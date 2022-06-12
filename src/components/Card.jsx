import { useContext } from 'react';
import { AppContext } from '../context/AppProvider';

const Card = ({city, superHost, photo, rating, title, type, beds, maxGuests}) => {
    
    const {location, guests} = useContext(AppContext);
    return (
        <> {(maxGuests <= guests && city === location)? 
            
            <div className="card">
                <div className="cardImg">
                    <img src={photo} alt="room"/>
                </div>
                    
                <div className="cardDescription">
                    {superHost ? <p className="superHost">Super host</p> : ''}
                    <p className="span">{beds === null ? type + '. ' : type + '. ' + beds + ' beds'}</p>
                    <p className="start"><i className="fa-solid fa-star"></i>{rating}</p>
                </div>
                <p className="title">{title}</p>
            </div>
            : ''}
        </>
        //Quiero hacer un not found result si no se encuantra ningun resultado
    )
};

export default Card;