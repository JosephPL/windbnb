import { useContext } from 'react';
import DropDownMenu from './DropDownMenu';
import { AppContext } from '../context/AppProvider';  
 
const Navbar = () => {
    const {location, guests, active , setActive} = useContext(AppContext);
    
    const handleDropDown = () => {
        (active === 'none') && setActive('active');
        (active === 'active') && setActive('none');
    };
    
    return (
        <nav>
            <div className='imgContainer'>
                <img src={require('../assets/logo.png')} alt='logo'/>
            </div>
            <div>
                <div className='navContainer' onClick={handleDropDown}>
                    <div className='btnLocation'>
                        <label>Location</label>
                        <p>{location ? location : ''}</p>
                    </div>
                    <div className='btnGuests' >
                        <label>Guests</label>
                        <p><span>{guests !== 0 ? 'Guests: ' + guests : 'add guests'}</span> </p>
                    </div>
                    <div  className='btnSearch'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

                <DropDownMenu active={active} />
            </div>
        </nav>
    )
};

export default Navbar;