import {useState} from "react"
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'
import {BgCont,LogCard,InputElement,LogHeader,LogDescription,Label,Form,LoginButton,FailedMsg} from "./StyledComponents"

const LoginRoute = ()=>{
    const [useremail,setuserEmail] = useState("")
    const [password,setuserPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [showError, setErrorMode] = useState(false)
    const navigate = useNavigate()




    const formSubmitted = async (event) => { 
    event.preventDefault(); 
    console.log(useremail, password); 
    if(useremail.length=== 0 || password.length===0){
        setErrorMode(true)
        setErrorMsg("Email and password are required")
    }
    else{
        setErrorMode(false)
    }
    const url = "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin"; 

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: useremail, 
            password: password
        })
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (response.ok) {       
            Cookies.set('jwt_token',data.data.token);
            navigate("/dashboard")
        } else {
            setErrorMode(true)
            setErrorMsg(data.message)
            console.error('Verification failed:', data.message || 'Unknown error');
        }
    } catch (error) {
        console.error('Network or server error:', error);
    }
};

    const trackEmail = (event)=>{
        setuserEmail(event.target.value)
    }
    const trackPassword = (event)=>{
        setuserPassword(event.target.value)

    }

    return(
        <BgCont>
            <LogCard>
                <LogHeader>Go Business</LogHeader>
                <LogDescription>Sign in to open your referral dashboard.</LogDescription>
                <Form onSubmit={formSubmitted}>
                <Label htmlFor="email" >Email</Label>
                <InputElement type="email"  id="email" onChange={trackEmail} value={useremail} /> 

                
                <Label htmlFor="Password" >Password</Label>
                <InputElement type="password"  id="Password" onChange={trackPassword} value={password} />
                <LoginButton type="submit" >Login</LoginButton> 
                {showError && <FailedMsg>{errorMsg}</FailedMsg>}
                </Form>
            </LogCard>
        </BgCont>

    )
}

export default LoginRoute