import { useState, useEffect } from 'react';
import { useLocation , useNavigate} from "react-router-dom";
import './RestaurantDetails.css';
import carbon1 from './assets/carbon_images/image1.avif';
import carbon2 from './assets/carbon_images/image2.avif';
import carbon3 from './assets/carbon_images/image3.jpg';
import carbon4 from './assets/carbon_images/image4.jpg';
import carbon5 from './assets/carbon_images/image5.jpg';

import baramasi1 from './assets/baramasi_images/image1.avif';
import baramasi2 from './assets/baramasi_images/image2.jpg';
import baramasi3 from './assets/baramasi_images/image3.jpg';
import baramasi4 from './assets/baramasi_images/image4.avif';
import baramasi5 from './assets/baramasi_images/image5.jpg';

import rosado1 from './assets/rosado_images/image1.avif';
import rosado2 from './assets/rosado_images/image2.jpg';
import rosado3 from './assets/rosado_images/image3.jpg';
import rosado4 from './assets/rosado_images/image4.jpg';
import rosado5 from './assets/rosado_images/image5.jpg';

import town1 from './assets/town/image1.avif';
import town2 from './assets/town/image2.avif';
import town3 from './assets/town/image3.avif';
import town4 from './assets/town/image4.avif';
import town5 from './assets/town/image5.avif';

import big1 from './assets/big/image1.jpg';
import big2 from './assets/big/image2.jpg';
import big3 from './assets/big/image3.jpg';
import big4 from './assets/big/image4.avif';
import big5 from './assets/big/image5.avif';

import clay1 from './assets/clay/image1.avif';
import clay2 from './assets/clay/image2.avif';
import clay3 from './assets/clay/image3.jpeg';
import clay4 from './assets/clay/image4.jpg';
import clay5 from './assets/clay/image5.avif';

import degree1 from './assets/degree/image1.jpg';
import degree2 from './assets/degree/image2.jpg';
import degree3 from './assets/degree/image3.jpg';
import degree4 from './assets/degree/image4.avif';
import degree5 from './assets/degree/image5.avif';

import forest1 from './assets/foresta/image1.avif';
import forest2 from './assets/foresta/image2.jpg';
import forest3 from './assets/foresta/image3.jpg';
import forest4 from './assets/foresta/image4.avif';
import forest5 from './assets/foresta/image5.jpg';

import lamp1 from './assets/lamp/image1.avif';
import lamp2 from './assets/lamp/image2.avif';
import lamp3 from './assets/lamp/image3.jpg';
import lamp4 from './assets/lamp/image4.avif';
import lamp5 from './assets/lamp/image5.avif';

import love1 from './assets/love/image1.avif';
import love2 from './assets/love/image2.jpg';
import love3 from './assets/love/image3.jpg';
import love4 from './assets/love/image4.avif';
import love5 from './assets/love/image5.avif';

import swift1 from './assets/swinton/image1.jpg';
import swift2 from './assets/swinton/image2.jpg';
import swift3 from './assets/swinton/image3.jpg';
import swift4 from './assets/swinton/image4.webp';
import swift5 from './assets/swinton/image5.avif';

import vaishali1 from './assets/vaishali/image1.avif';
import vaishali2 from './assets/vaishali/image2.avif';
import vaishali3 from './assets/vaishali/image3.avif';
import vaishali4 from './assets/vaishali/image4.webp';
import vaishali5 from './assets/vaishali/image5.avif';

function RestaurantDetails() {
    const location = useLocation();
    const Restro_name = location.state?.name;

    const naviagte = useNavigate();

    const [Option, SetOption] = useState({
        Image: [],
        add: "",
        menu: [],
    });

    const [Selected_Index, SetSelected_Index] = useState(0);
    const [selectedMenuImg, setSelectedMenuImg] = useState(null); // State for enlarged menu image

    useEffect(() => {
        if (Restro_name === 'Carbon') {
            SetOption({
                Image: [carbon1, carbon2, carbon3],
                add: "F-6A, Ground Floor, Amir Manzil, Ramesh Marg, C Scheme, Jaipur",
                menu: [carbon4, carbon5],
            });
        }

        if(Restro_name === 'Rosado'){
            SetOption({
                Image:[rosado1 , rosado2 , rosado3],
                add:"01, 11th Floor, Mall Of Jaipur, Kuber Complex, Gandhipath, Vaishali Nagar, Jaipur",
                menu:[rosado4 , rosado5],
            });
        }

        if(Restro_name == 'Town Coffe'){
            SetOption({
                Image:[town1 , town2 , town3],
                add:"E 95, Lal Bahadur Nagar, JLN Marg, Malviya Nagar, Jaipur",
                menu:[town4 , town5],
            });
        }

        if(Restro_name == 'Baramasi'){
            SetOption({
                Image:[baramasi1 , baramasi2 , baramasi3],
                add: "4th Floor, Jai Club Prime, Mahavir Marg, MI Road, Jaipur",
                menu:[baramasi4 , baramasi5],
            });
        }

        if(Restro_name == 'Big Tree Cafe'){
            SetOption({
                Image : [big1 , big2  ,big3],
                add : "Plot Number 8, Ajmer Rd, Karni Vihar, Badarwaz, Jaipur, Rajasthan 302019",
                menu : [big4 , big5]
            });
        }

        if(Restro_name == 'Clayborn'){
            SetOption({
                Image : [clay1 , clay2 , clay3],
                add : "Amrapali Marg, D - Block, Vaishali Nagar, Jaipur",
                menu : [clay4 , clay5],
            });
        }

        if(Restro_name == '360 Degree'){
            SetOption({
                Image : [degree1 , degree2 , degree3],
                add : "Top Floor, JTN Anukampa Plaza, Near Raj Mandir, C Scheme, Jaipur",
                menu : [degree4 , degree5],
            });
        }

        if(Restro_name == 'Forresta Kitchen And Bar'){
            SetOption({
                Image : [forest1 , forest2 , forest3],
                add : "Devraj Niwas, Mirza Ismail Rd, near Khasa Kothi Flyover, Bani Park, Jaipur",
                menu : [forest4 , forest5],
            });
        }

        if(Restro_name == 'Lampost Cafe'){
            SetOption({
                Image : [lamp1 , lamp2 , lamp3],
                add : "E-141, Sardar Patel Marg, Durgadas Colony, C Scheme, Ashok Nagar, Jaipur",
                menu : [lamp4 , lamp5 ]
            });
        }

        if(Restro_name == 'Love Over Coffee'){
            SetOption({
                Image : [love1 , love2 , love3 ],
                add : "F 5, Jamnalal Bajaj Marg, Ashok Nagar, C Scheme, Jaipur",
                menu : [love4 , love5],
            });
        }

        if(Restro_name == 'Swinton House'){
            SetOption({
                Image : [swift1 , swift2 , swift3],
                add : " B, 20, Gopinath Marg, Jayanti Market, New Colony, Jaipur",
                menu : [swift4 , swift5],
            });
        }

        if(Restro_name == 'Vaishali Veg Inn'){
            SetOption({
                Image : [vaishali1 , vaishali2 , vaishali3],
                add : "5, Khasra 46, Gandhi Path, Near Pratap Marriage Garden, Vaishali Nagar, Jaipur",
                menu : [vaishali4 , vaishali5],
            });
        }

    }, [Restro_name]);

    const Handle_Image_Selection = () => {
        SetSelected_Index((prev) => (prev + 1) % Option.Image.length);
    };

    const HandleBooking = (name)=>{
        naviagte('/tablereserve', {state:{name}});
    }

    return (
        <div className="restaurant_details">
            {Option.Image.length > 0 ? (
                <div>
                    <div className="image_gallery">
                        <img
                            src={Option.Image[Selected_Index]}
                            alt={`Restaurant ${Restro_name}`}
                            onClick={Handle_Image_Selection}
                        />
                    </div>

                    <div className="details_section">
                        <h2>{Restro_name}</h2>
                        <p><strong>Address:</strong> {Option.add}</p>
                    </div>

                    <div className="menu_section">
                        <h3>Menu</h3>
                        {Option.menu.map((menuImg, index) => (
                            <img 
                                key={index} 
                                src={menuImg} 
                                alt="Menu Item" 
                                className="menu_image" 
                                onClick={() => setSelectedMenuImg(menuImg)} // Set clicked image as selected
                            />
                        ))}
                    </div>

                    <div className="booking_section">
                        <button id="book_btn" onClick={()=>HandleBooking(Restro_name)}>Book Now</button>
                    </div>

                    {/* Modal for enlarged menu image */}
                    {selectedMenuImg && (
                        <div className="menu_modal" onClick={() => setSelectedMenuImg(null)}>
                            <img src={selectedMenuImg} alt="Enlarged Menu" className="enlarged_menu_image" />
                        </div>
                    )}
                </div>
            ) : (
                <p>Loading Details...</p>
            )}
        </div>
    );
}

export default RestaurantDetails;
