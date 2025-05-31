import { useState } from "react";
import "./SignupForm.css";

function SignupForm() {
    const [formData, setFormData] = useState({
        User_Name: "",
        User_Number: "",
        User_Email: "",
        User_Password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!formData.User_Name || !formData.User_Number || !formData.User_Email || !formData.User_Password) {
            setError("All fields are required");
            return;
        }

        if (!formData.User_Email.includes("@")) {
            setError("Enter a valid email");
            return;
        }

        const Send_Data = {
            Uname: formData.User_Name,
            Uemail: formData.User_Email,
            Unum: formData.User_Number,
            Upass: formData.User_Password,
        };

        try {
            // console.log("User Data:", formData);

            const response = await fetch("http://localhost:5000/TableSignUp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(Send_Data),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "Registration failed");
            } else {
                setSuccess("User registered successfully!");
                setFormData({
                    User_Name: "",
                    User_Number: "",
                    User_Email: "",
                    User_Password: "",
                });
            }
        } catch (err) {
            console.error("Error:", err);
            setError("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="signup_form_container">
            <h1 className="welcome_heading">Welcome to Reserve Your Bite!</h1>
            <p className="welcome_subtext">Create an account to explore amazing dining experiences.</p>

            <h2>Sign Up</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="User_Name"
                    placeholder="Name"
                    value={formData.User_Name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="User_Number"
                    placeholder="Phone Number"
                    value={formData.User_Number}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="User_Email"
                    placeholder="Email"
                    value={formData.User_Email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="User_Password"
                    placeholder="Password"
                    value={formData.User_Password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupForm;
