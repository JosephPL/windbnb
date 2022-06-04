import { useState } from 'react';
import DropDownMenu from './DropDownMenu';
import SelectCity from './SelectCity';


const Navbar = () => {
    const [active , setActive] = useState('none');

    const handleDropDown = () => {
        (active == 'none') && setActive('active');
        (active == 'active') && setActive('none');
    
    };
    
    // const handle = (e) => {
    //     const adults = e.target.parentElement.previousElementSibling.children[0];

    //     console.log(adults)
    // };

    return (
        <nav>
            <div className='imgContainer'>
                <img src={require('../assets/logo.png')} alt='logo'/>
            </div>
            <div>
                <form className='formContainer' onClick={handleDropDown}>
                    {/* <SelectCity />
                    <button type='button' className='btnGuests' onClick={handleDropDown}>Add guests</button>
                    <button type='button' className='btnSearch' ><i className="fa-solid fa-magnifying-glass"></i></button> */}
                    <div className='btnLocation'>
                        <label>Location</label>
                    </div>
                    <div className='btnGuests' >
                        <span>Add Guests</span> 
                    </div>
                    <div  className='btnSearch'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </form>

                <DropDownMenu active={active} />
            </div>
        </nav>
    )
};

export default Navbar;