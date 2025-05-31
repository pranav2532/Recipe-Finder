import { useState } from 'react';
import './Restaurent_list_top.css';
import carbon from './assets/carbon.jpg';
import town from './assets/town.jpg';
import rosado from './assets/rosado.avif';
import baramasi from './assets/baramasi.avif';
import big from './assets/big.jpg';
import clayb from './assets/clayb.avif';
import degree from './assets/degree.jpg';
import foresta from './assets/foresta.avif';
import lamp from './assets/lamp.avif';
import swinton from './assets/swinton.jpg';
import vaishali from './assets/vaishali.avif';
import love from './assets/love.avif';
import { useLocation, useNavigate } from "react-router-dom";

function Restaurent_List_Top() {
    // const [Restroname, SetRestroname] = useState([]);
    // const [Restroimage, SetRestroimage] = useState([]);
    // const [Restrodesc, SetRestrodesc] = useState([]);

    const navigate = useNavigate();
    const Location = useLocation();


    let name = ['Carbon', 'Town Coffe', 'Rosado', 'Love Over Coffe', '360 Degree', 'Clayborn', 'Forresta Kitchen And Bar', 'Swinton House', 'Big Tree Cafe', 'Lampost Cafe', 'Vaishali Veg Inn', 'Baramasi'];
    let image = [carbon, town, rosado, degree, clayb, foresta, big, lamp, vaishali, baramasi, swinton, love];

    const Carbon_desc = 'Carbon, Jaipur: A stylish eatery blending modern Indian cuisine with innovative techniques. Expect unique flavors and a sophisticated dining experience.';
    const Town_desc = `Town Coffee, Jaipur: A cozy café known for its specialty coffee, relaxed atmosphere, and delicious snacks and light meals.`;
    const Rosado_desc = `Rosado, Jaipur: A vibrant restaurant known for its lively atmosphere, global cuisine, and creative cocktails. Expect a memorable dining experience.`;

    let desc = [Carbon_desc, Town_desc, Rosado_desc];

    const Handle_Restro_Name = (name)=>{
        navigate('/restro_detail' , {state:{name}});
    }


    return (
        <>
        <div style={{display:'flex' , justifyContent:'center' , fontSize:'2em'}}>
            <h2>Featured Restaurants</h2>
        </div>
            <div className="restaurant_list_container">
                {/* Only display first 3 cards */}
                {name.slice(0, 3).map((res, index) => (
                    <div key={index} className="restaurant_card">
                        <div className="restaurant_image">
                            <img src={image[index]} alt={res} />
                        </div>
                        <div className="restaurant_info">
                            <h2>{res}</h2>
                            <p>{desc[index]}</p>
                            <button id="book_button" onClick={()=>Handle_Restro_Name(res)}>Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Restaurent_List_Top;
