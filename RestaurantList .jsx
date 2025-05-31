import "./RestaurantList.css";
import carbon from "./assets/carbon.jpg";
import town from "./assets/town.jpg";
import rosado from "./assets/rosado.avif";
import baramasi from "./assets/baramasi.avif";
import big from "./assets/big.jpg";
import clayb from "./assets/clayb.avif";
import degree from "./assets/degree.jpg";
import foresta from "./assets/foresta.avif";
import lamp from "./assets/lamp.avif";
import swinton from "./assets/swinton.jpg";
import vaishali from "./assets/vaishali.avif";
import love from "./assets/love.avif";
import { useNavigate, useLocation } from 'react-router-dom';

function RestaurantList() {

    const navigate = useNavigate();

    const HandleBooking = (name)=>{
        navigate('/restro_detail' , {state:{name}});
    }

    let name = [
        "Carbon",
        "Town Coffee",
        "Rosado",
        "Love Over Coffee",
        "360 Degree",
        "Clayborn",
        "Forresta Kitchen And Bar",
        "Swinton House",
        "Big Tree Cafe",
        "Lampost Cafe",
        "Vaishali Veg Inn",
        "Baramasi",
    ];

    let image = [carbon, town, rosado, love, degree, clayb, foresta, swinton, big, lamp, vaishali, baramasi];

    let desc = [
        "Carbon, Jaipur: A stylish eatery blending modern Indian cuisine with innovative techniques. Expect unique flavors and a sophisticated dining experience.",
        "Town Coffee, Jaipur: A cozy café known for its specialty coffee, relaxed atmosphere, and delicious snacks and light meals.",
        "Rosado, Jaipur: A vibrant restaurant known for its lively atmosphere, global cuisine, and creative cocktails. Expect a memorable dining experience.",
        "Love Over Coffee, Jaipur: A perfect spot for coffee lovers, serving delightful brews and cozy seating.",
        "360 Degree, Jaipur: Known for its panoramic city views, offering a mix of delicious food and drinks.",
        "Clayborn, Jaipur: A modern fine-dining experience with unique flavors and impeccable service.",
        "Forresta Kitchen And Bar, Jaipur: A nature-inspired café with a green ambiance, offering multi-cuisine dishes.",
        "Swinton House, Jaipur: A sophisticated place known for its elegant interiors and exquisite dining options.",
        "Big Tree Cafe, Jaipur: A rustic, open-air café with a peaceful environment and organic food options.",
        "Lampost Cafe, Jaipur: A cozy retreat with artistic décor and a relaxing atmosphere for coffee and conversations.",
        "Vaishali Veg Inn, Jaipur: A paradise for vegetarians, serving authentic Indian and Rajasthani flavors.",
        "Baramasi, Jaipur: A restaurant famous for its seasonal flavors and year-round delicacies.",
    ];

    return (
        <div className="restaurant_list">
            {/* Heading Section */}
            <div className="restaurant_header">
                <h2>Restaurants We’ve Partnered With</h2>
                <p>Explore our top dining spots and make your reservations now!</p>
            </div>

            {/* Restaurant Cards */}
            <div className="restaurant_grid">
                {name.map((res, index) => (
                    <div className="restaurant_card" key={index}>
                        <div className="restaurant_image">
                            <img src={image[index]} alt={res} />
                        </div>
                        <div className="restaurant_info">
                            <h3>{res}</h3>
                            <p>{desc[index]}</p>
                            <button onClick={()=>HandleBooking(res)}>Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantList;
