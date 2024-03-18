import LoginForm from "../components/LogInForm";
import SignUpForm from "../components/SignUpForm";

function LoginPage({setShow, show}) {
    return (
    <>
    <LoginForm setShow={setShow} show={show}/>
    <SignUpForm setShow={setShow} show={show}/>
    </>
    )
};


export default LoginPage;