import SelectCity from "./SelectCity";
import Guests from "./Guests";
import { AppContext } from '../context/AppProvider';
import { useContext } from "react";
import Swal from 'sweetalert2';

const DropDownMenu = ({active }) => {
    const {setGuests, setActive, setLocation} = useContext(AppContext);

    const handleGetData = (e) => {
        const cityArr = e.target.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].textContent;
        const adults = Number(e.target.parentElement.previousElementSibling.childNodes[0].childNodes[2].childNodes[1].textContent);
        const childs = Number(e.target.parentElement.previousElementSibling.childNodes[0].childNodes[5].childNodes[1].textContent);
        const guests = adults + childs; 
        const city = cityArr.split(',');

        if(cityArr === 'Select...'){
            Swal.fire(
                'Wait!',
                'Choose a Location to search!',
                'warning'
                );
        }else{
            setLocation(city[0])
        }

        setActive('none');

        if(childs > 0 && adults < 1){
            Swal.fire(
            'Wait!',
            'Childs can`t be alone!',
            'warning'
            );
            
            setGuests(0)
        }else {
            setGuests(guests);
        }

        if(guests === 0 ){
            Swal.fire(
            'Wait!',
            'Add guests to the search!',
            'warning'
            );
        }

    }

    return (
        <div className={active}>
            <form className="formDropDown">
                <div className="sltContainer">
                     <SelectCity  />
                </div>
               
                <div className="addContainer">
                    <div className='AddGuest'>
                        <Guests type='Adults' ages='Ages 13 or above'/>

                        <Guests type='Children' ages='Ages 2-12'/>
                    </div>
                </div>
                

                <div className="btnContainer">
                    <button type="button" className="search" onClick={handleGetData} ><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                </div>
                
            </form>
        </div>
    )
};



export default DropDownMenu;