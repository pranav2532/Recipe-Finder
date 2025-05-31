import { useState, useEffect } from "react";
import "./Profile.css";

function Profile() {
    const [user, setUser] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        User_Name: "",
        User_Email: "",
        New_Password: "",
    });

    useEffect(() => {
        fetch("http://localhost:5000/getuserdata", { credentials: "include" })
            .then((res) => res.json())
            .then((data) => {
                if (data.user) {
                    setUser(data.user);
                    setFormData({ User_Name: data.user.User_Name, User_Email: data.user.User_Email, New_Password: "" });
                }
            })
            .catch((err) => console.error("Error fetching user:", err));

        fetch("http://localhost:5000/bookings", { credentials: "include" })
            .then((res) => res.json())
            .then((data) => {
                setBookings(Array.isArray(data.booking) ? data.booking : []);
            })
            .catch((err) => console.error("Error fetching bookings:", err));
    }, []);

    const handleLogout = () => {
        fetch("http://localhost:5000/logout", { method: "POST", credentials: "include" })
            .then(() => {
                setUser(null);
                setBookings([]);
            })
            .catch((err) => console.error("Logout failed:", err));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const response = await fetch("http://localhost:5000/update_val", {
                method: "PUT",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Profile updated successfully!");
                setUser({ ...user, User_Name: formData.User_Name, User_Email: formData.User_Email });
                setIsEditing(false);
            } else {
                alert("Failed to update profile.");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    const handleDeleteBooking = async (Table_Booking_id) => {
        try {
            const response = await fetch("http://localhost:5000/delete_reservation", {
                method: "DELETE",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ Table_Booking_id }),
            });
    
            if (response.ok) {
                alert("Booking deleted successfully!");
                setBookings(bookings.filter(booking => booking.Table_Booking_id !== Table_Booking_id));
            } else {
                alert("Failed to delete booking.");
            }
        } catch (error) {
            console.error("Error deleting booking:", error);
        }
    };

    return (
        <div className="profile-container">
            {user ? (
                <div className="profile-card">
                    <h1 className="profile-heading">My Profile</h1>

                    {!isEditing ? (
                        <div className="profile-details">
                            <p><strong>Name:</strong> {user.User_Name}</p>
                            <p><strong>Email:</strong> {user.User_Email}</p>
                            <button className="edit-btn" onClick={handleEdit}>Edit Profile</button>
                        </div>
                    ) : (
                        <div className="edit-profile">
                            <label>Name:</label>
                            <input type="text" name="User_Name" value={formData.User_Name} onChange={handleChange} />

                            <label>Email:</label>
                            <input type="email" name="User_Email" value={formData.User_Email} onChange={handleChange} />

                            <label>New Password:</label>
                            <input type="password" name="New_Password" placeholder="Enter new password (optional)" onChange={handleChange} />

                            <button className="save-btn" onClick={handleSave}>Save Changes</button>
                        </div>
                    )}

                    <h2 className="bookings-heading">My Bookings</h2>
                    {bookings.length > 0 ? (
                        <div className="bookings-container">
                            {bookings.map((booking) => (
                                <div className="booking-card" key={booking.Booking_ID}>
                                    <div className="restaurant-name">{booking.Reservation_Place}</div>
                                    <div className="booking-info">📅 {booking.Reservation_Date}</div>
                                    <div className="booking-info">⏰ {booking.Reservation_Time}</div>
                                    <button className="delete-btn" onClick={() => handleDeleteBooking(booking.Table_Booking_id)}>Delete</button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="no-bookings">No bookings yet.</p>
                    )}

                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p className="loading-text">Loading...</p>
            )}
        </div>
    );
}

export default Profile;
