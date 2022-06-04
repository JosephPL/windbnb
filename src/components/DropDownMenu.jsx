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
            <div className='AddGuest'>
                <h3>Adults</h3>
                <span>Ages 13 or above</span>
                <div className="cant">
                    <a href="#" onClick={plus_minusItem}className="btn minus">-</a>
                    <p className="num">0</p>
                    <a href="#" onClick={plus_minusItem}className="btn plus">+</a> 
                </div>
                    <h3>Children</h3>
                    <span>Ages 2-12</span>
                    <div className="cant">
                        <a href="#" onClick={plus_minusItem}className="btn minus">-</a>
                        <p className="num">0</p>
                        <a href="#" onClick={plus_minusItem}className="btn plus">+</a>
                    </div>
                </div>
        </div>
    )
};

export default DropDownMenu;