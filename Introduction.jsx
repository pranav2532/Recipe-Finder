import './Introduction.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Introduction() {

    const navigate = useNavigate(); 

    const Handle_Click = ()=>{
        navigate('/RestaurantList');
    }  

    return (
        <>
            <div className='intro_main_div'>
                
                <div className='intro_heading'>
                    <h1>Reserve Your Table at the Best Restaurants</h1>
                    <p>Find your perfect dining experience in just a few clicks.</p>
                    <button id='cta_button' onClick={Handle_Click}>Make a Reservation</button>
                </div>

            </div>
        </>
    );
}

export default Introduction;