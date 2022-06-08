const Guests = ({type, ages}) => {

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
        <>
            <h3>{type}</h3>
            <span>{ages}</span>
            <div className="cant">
                <button type='button' onClick={plus_minusItem}className="btn minus">-</button>
                        <p className="num">0</p>
                <button type='button' onClick={plus_minusItem}className="btn plus">+</button> 
            </div>
        </>
    )
};

export default Guests;