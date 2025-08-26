import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css"


const Login = () => {

    const navigate = useNavigate();
    const { login } = useAuth();
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userName === "admin" && password === "123456") {
            login();
            navigate("/");
        } else {
            alert("Սխալ մուտքանուն կամ գաղտնաբառ")
        }
    };


    return (
        <div className="login-container">
            <h2>Մուտք գործել</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <label>
                    Մուտքանուն
                    <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)} 
                    />
                </label>
                <label>
                    Գաղտնաբառ
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                </label>

                <button type="submit">Մուտք</button>
            </form>
        </div>
    );
};

export default Login;