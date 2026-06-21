import {Header,RowContainer,LogoutBtn,TryButton,BtnContainer} from "./StyledComponents"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"

const HeadingSec = ()=>{
    const navigate = useNavigate()
    
        const Logout =()=>{
            Cookies.remove("jwt_token")
            navigate("/login")
            
    
        }

    return(
        <RowContainer>
            <Header>Go Business</Header>
            <BtnContainer>
            <TryButton>Try for free</TryButton>
            
            <LogoutBtn type="button" onClick={Logout} >LogOut</LogoutBtn>
            </BtnContainer>
        </RowContainer>
    )
}
export default HeadingSec