import {useNavigate} from "react-router-dom"
import {DescriptionOne,HeaderError,BgCont,BtnOne} from "./StyledComponents" 

const NotFound = ()=>{
    const navigate = useNavigate()
    const buttonClicked = ()=>{
        navigate("/dashboard")
    }


    return(
        <BgCont>
            <HeaderError>404</HeaderError>
            <DescriptionOne>Page not found</DescriptionOne>
            
            <BtnOne type="button" onClick={buttonClicked}>Back to dashboard</BtnOne>
        </BgCont>
    )
}



export default NotFound