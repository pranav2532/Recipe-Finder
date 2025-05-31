import { useState } from "react";
import "./TableReserve.css";
import { useLocation, useNavigate } from "react-router-dom";

function TableReserve() {
    const location = useLocation();
    const navigate = useNavigate();

    const Restro = location.state?.name || "";  // Get restaurant name if available

    const [formData, setFormData] = useState({
        Reservation_Date: "",
        Reservation_Time: "",
        Reservation_People: "",
        Reservation_Place: Restro,  // Prefill restaurant name
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const Send_Data = {
            Udate: formData.Reservation_Date,
            Utime: formData.Reservation_Time,
            Upeople: parseInt(formData.Reservation_People), // Ensure it's a number
            Ulocation: formData.Reservation_Place,
        };

        console.log("Sending Data to API:", Send_Data); // Debugging log

        try {
            const url = `http://localhost:5000/Table_Reserve`;

            const response = await fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Send_Data),
            });

            if (response.ok) {
                console.log("Reservation successful");
                navigate("/confirmation"); // Redirect after success (change route as needed)
            } else {
                const errorData = await response.json();
                setError(errorData.error || "Failed to reserve table");
            }
        } catch (err) {
            setError("Network error, please try again");
        }

        setLoading(false); // Reset loading state after request
    };

    return (
        <div className="reservation_container">
            {/* 🏷️ Main Heading */}
            <h1 className="reservation_heading">Book Your Table at Your Favorite Spot!</h1>
            <p className="reservation_subtext">Secure your reservation now and enjoy a seamless dining experience.</p>

            <h2>Reserve Your Table</h2>
            {error && <p className="error_message">{error}</p>} {/* Display error message if any */}

            <form onSubmit={handleSubmit}>
                <label>Date:</label>
                <input type="date" name="Reservation_Date" value={formData.Reservation_Date} onChange={handleChange} required />

                <label>Time:</label>
                <input type="time" name="Reservation_Time" value={formData.Reservation_Time} onChange={handleChange} required />

                <label>Number of People:</label>
                <input type="number" name="Reservation_People" value={formData.Reservation_People} onChange={handleChange} required min="1" />

                <label>Restaurant Name:</label>
                <input
                    type="text"
                    name="Reservation_Place"
                    value={formData.Reservation_Place}
                    onChange={handleChange}
                    required
                    disabled={!!Restro}  // Disable input if prefilled
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Booking..." : "Book Now"}
                </button>
            </form>
        </div>
    );
}

export default TableReserve;
