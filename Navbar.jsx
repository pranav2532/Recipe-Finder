import { useEffect, useState } from 'react';
import banner from './assets/banner.jpg';
import './navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [User, SetUser] = useState(null);

    const Handle_restro_nav = (e) => {
        e.preventDefault();
        navigate('/RestaurantList');
    };

    const HandleSignUp = () => {
        navigate('/signup');
    };

    const HandleLogout = async () => {
        try {
            const url = `http://localhost:5000/logout`;
            await fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
            });
            SetUser(null);
            navigate('/'); // Redirect to home after logout
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const Fetch_data = async () => {
            try {
                const url = `http://localhost:5000/token`;
                const data = await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!data.ok) {
                    SetUser(null);
                    return;
                }

                const Response = await data.json();
                SetUser(Response.user);
            } catch (err) {
                console.log(err);
            }
        };

        Fetch_data();
    }, []);

    return (
        <>
            <div className="nav_main_container">
                <div className='nav_main_heading'>
                    <h3>Reserve My Bite</h3>
                </div>
                
                <div className='nav_links'>
                    <div className='nav_link_items'><a href="#"><h5>Home</h5></a></div>
                    <div className='nav_link_items'><a href="#" onClick={Handle_restro_nav}><h5>Restaurants</h5></a></div>
                    <div className='nav_link_items'><a href="#"><h5>About</h5></a></div>
                    <div className='nav_link_items'><a href="#"><h5>Contacts</h5></a></div>
                </div>
                
                <div className='nav_user'>
                    {User ? (
                        <>
                            <div onClick={() => navigate('/profile')}>Profile</div>
                            <div onClick={HandleLogout}>Logout</div>
                        </>
                    ) : (
                        <>
                            <div onClick={() => navigate('/login')}>Log In</div>
                            <div onClick={HandleSignUp}>Sign Up</div>
                        </>
                    )}
                </div>
            </div>
            
            <div className='nav_banner_div'>
                <img src={banner} alt="Website Banner" />
            </div>
        </>
    );
}

export default Navbar;