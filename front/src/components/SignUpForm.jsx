import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { signup } from '../utils/auth/authenticate';
import "../styles/signupform.css";

function SignUpForm({show, setShow}) {
    const [error, setError] = useState("");
    const { handleSubmit, register, formState: { errors }, } = useForm();
    async function onSubmit(values) {
        try {
        await signup(values);
        } catch (error) {
            if (error.message =="Request failed with status code 400") {
                setError("Enter valid information, password must have atleast 6 characters");
            } else if (error.message =="Request failed with status code 500") {
                setError("This email is already in use")
            } else
            setError(error.message);
        setTimeout(() => {
            setError();
        }, 2500);
        };
    }

    const showLoginHandler = () => {
        setShow(value => !value);
    }

    return (
        <>   
        <div className={show?"":"hidden"}>
        <div className='formBoxSignUp'> 
            <form className="formSignUp" onSubmit={handleSubmit(onSubmit)}>
                <div className="inputBarEmailSignUp">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="signUpEmail" placeholder="Email"{...register("email", {
                        required: "Email is required",
                    })}
                    />
                    <div>{errors.email?.message}</div>
                </div>
                <div className="inputBarPasswordSignUp">
                <label htmlFor="password">Password</label>
                <input type="password" id="signUpPassword" placeholder="Password"{...register("password", {
                        required: "Password is required",
                    })}
                    />
                    <div>{errors.password?.message}</div>
                </div>
                <input type="submit" value="Sign up" className="submitSignUp"/>
            </form>         
            <button className='loginButton' onClick={()=>{showLoginHandler()}}>Login</button>
            </div>
            {error && <p className='errorSignUpForm'>{error}</p>}
        </div>
        </>
    );
}

export default SignUpForm;