import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { login } from '../utils/auth/authenticate';
import "../styles/loginform.css";
import { useNavigate } from 'react-router-dom';

function LoginForm({show, setShow}) {
    const [error, setError] = useState("");
    const { handleSubmit, register, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    async function onSubmit(values) {
        try {
        await login(values);
        navigate("/movielist");
        } catch (error) {
            if (error.message =="Request failed with status code 400") {
                setError("Incorrect email or password");
            } else
            setError(error.message);
        setTimeout(() => {
            setError();
        }, 2500);
        };
    }

    const showSignUpHandler = () => {
        setShow(value => !value)
    }

    return (
        <>   
        <div className={show?"hidden":""}>
            <div className='formBoxLogin'>
            <form className="formLogin" onSubmit={handleSubmit(onSubmit)}>
                <div className="inputBarEmailLogin">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="loginEmail" placeholder="Email"{...register("email", {
                        required: "Email is required",
                    })}
                    />
                    <div>{errors.email?.message}</div>
                </div>
                <div className="inputBarPasswordLogin">
                <label htmlFor="password">Password</label>
                <input type="password" id="loginPassword" placeholder="Password"{...register("password", {
                        required: "Password is required",
                    })}
                    />
                    <div>{errors.password?.message}</div>
                </div>
                <input type="submit" value="Login" className="submitLogin"/>
            </form>         
            <button className='signUpButton' onClick={()=>{showSignUpHandler()}}>Sign Up</button>
            </div>
            {error && <p className='errorLoginform'>{error}</p>}
        </div>
        </>
    );
}

export default LoginForm;