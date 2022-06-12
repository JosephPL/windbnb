import { createContext , useState} from "react";

export const AppContext = createContext();

export const AppProvider = (props) =>{
    const [location, setLocation ] = useState(false);
    const [guests, setGuests] = useState(0);
    const [active, setActive] = useState('none');

     
    return (
        <AppContext.Provider value={{location, setLocation, guests, setGuests, active, setActive}} >
            {props.children}
        </AppContext.Provider>
    ) 
}; 