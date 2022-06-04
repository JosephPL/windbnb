import { useState } from 'react';
import DropDownMenu from './DropDownMenu';
import SelectCity from './SelectCity';


const Navbar = () => {
    const [active , setActive] = useState('none')
    const handleDropDown = (e) => {
        const classDropDown = e.target.parentElement.nextElementSibling.classList ;
        // (classDropDown == 'none') && setActive('active');
        // (classDropDown == 'active') && setActive('none');
        console.log(classDropDown)
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
                <form className='formContainer'>
                    <SelectCity />
                    <button className='btnGuests' onClick={handleDropDown}>Add guests</button>
                    <button className='btnSearch' ><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>

                <DropDownMenu active={active} />
            </div>
        </nav>
    )
};

export default Navbar;