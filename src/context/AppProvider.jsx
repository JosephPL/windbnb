import { createContext , useState} from "react";

export const AppContext = createContext();

export const AppProvider = (props) =>{
    const [location, setLocation ] = useState(false);
    const [adults, setAdults] = useState(0);
    const [childs, setChilds] = useState(0);
    const [guests, setGuests] = useState(0);
    const [active, setActive] = useState('none');

     
    return (
        <AppContext.Provider value={{location, setLocation,adults, setAdults,childs, setChilds, guests, setGuests, active, setActive}} >
            {props.children}
        </AppContext.Provider>
    ) 
}; 