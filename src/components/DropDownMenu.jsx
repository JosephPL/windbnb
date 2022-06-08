import SelectCity from "./SelectCity";
import Guests from "./Guests";
import { AppContext } from '../context/AppProvider';
import { useContext } from "react";

const DropDownMenu = ({active }) => {
    const {setGuests, setActive} = useContext(AppContext);


    const handleGetData = (e) => {
        const adults = Number(e.target.parentElement.previousElementSibling.childNodes[2].childNodes[1].textContent);
        const childs = Number(e.target.parentElement.previousElementSibling.childNodes[5].childNodes[1].textContent);
        const guests = adults + childs; 
        
        if(guests !== 0 ){
            setGuests('Guests: ' + guests);
        }else {
            setGuests('')
        }
        setActive('none');
    }

    return (
        <div className={active}>
            <form className="formDropDown">

                <SelectCity  />

                <div className='AddGuest'>
                    <Guests type='Adults' ages='Ages 13 or above'/>

                    <Guests type='Children' ages='Ages 2-12'/>
                </div>

                <div className="btnContainer">
                    <button type="button" className="search" onClick={handleGetData} ><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                </div>
                
            </form>
        </div>
    )
};



export default DropDownMenu;