import SelectCity from "./SelectCity";

const DropDownMenu = ({active}) => {
    function plus_minusItem(e){
        let item = 0;
        if(e.target.classList.contains('plus')){ 
            item = parseInt(e.target.previousElementSibling.textContent);
            e.target.previousElementSibling.textContent = item + 1;
        }
            
        if(e.target.classList.contains('minus')){ 
            if(parseInt(e.target.nextElementSibling.textContent) <= 0){
                // console.log('es menor a 0')
            }else{
                item = parseInt(e.target.nextElementSibling.textContent);
                e.target.nextElementSibling.textContent = item - 1;
            }
        }
    };

    
    return (
        <div className={active}>

            <SelectCity />
            <div className='AddGuest'>
                <h3>Adults</h3>
                <span>Ages 13 or above</span>
                <div className="cant">
                    <button type='button' onClick={plus_minusItem}className="btn minus">-</button>
                    <p className="num">0</p>
                    <button type='button' onClick={plus_minusItem}className="btn plus">+</button> 
                </div>
                    <h3>Children</h3>
                    <span>Ages 2-12</span>
                    <div className="cant">
                        <button type='button' onClick={plus_minusItem}className="btn minus">-</button>
                        <p className="num">0</p>
                        <button type='button' onClick={plus_minusItem}className="btn plus">+</button>
                    </div>
                </div>
                <div>
                    <button type="button" className="search"><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                </div>
                
        </div>
    )
};

export default DropDownMenu;