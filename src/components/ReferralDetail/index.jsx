import {useCallback, useEffect, useState} from "react"
import Cookies from "js-cookie"
import { useNavigate,useParams } from "react-router-dom"
import HeadingSec from "../HeadinSec"
import {BgContainer,CardDetails,Desscription,Header,ButtonOne, CardHeaderRow,PartnerName,ServiceBadge, DetailRow,FieldLabel,FieldValue,ProfitValue} from "./StyledComponents"


const ReferralDetail =()=>{
    const {id} = useParams(); 
    const [details,setDetails] = useState()

    const navigate = useNavigate()
    
    const fetchDashboardData = useCallback(async ()=>{

            const jwtToken = Cookies.get("jwt_token") 
            if (!jwtToken) {
                navigate("/login");
                return;
            }                     
    
    
            const url  = `https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?id=${id}`
            const options = {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
                method: 'GET',
                }
            try{
                const response = await fetch(url,options)
                const data = await response.json()
                setDetails(data.data.referrals)
            }catch(error){
                
            }   
        }, [id, navigate])
        useEffect(()=>{    
            fetchDashboardData();
        },[fetchDashboardData])

        const buttonClikced = ()=>{
            navigate("/dashboard")
        }
        const result = details === undefined
        console.log(details)

        return(     
              
         <BgContainer>
            <HeadingSec />
            <ButtonOne type="button" onClick={buttonClikced}>Back to dashboard  </ButtonOne>
            <Header>Referral Details</Header>
            <Desscription>Full information for this referral partner.</Desscription>
            {result ? "": (

            <>
            <CardDetails>
                      <CardHeaderRow>
                        <PartnerName>{details.name}</PartnerName>
                        <ServiceBadge>{details.serviceName}</ServiceBadge>
                    </CardHeaderRow>

                    <DetailRow>
                        <FieldLabel>REFERRAL ID</FieldLabel>
                        <FieldValue>{details.id}</FieldValue>
                    </DetailRow>

                    <DetailRow>
                        <FieldLabel>NAME</FieldLabel>
                        <FieldValue>{details.name}</FieldValue>
                    </DetailRow>

                    <DetailRow>
                        <FieldLabel>SERVICE NAME</FieldLabel>
                        <FieldValue>{details.serviceName}</FieldValue>
                    </DetailRow>

                    <DetailRow>
                        <FieldLabel>DATE</FieldLabel>
                        <FieldValue>{details.date}</FieldValue>
                    </DetailRow>

                    <DetailRow>
                        <FieldLabel>PROFIT</FieldLabel>
                        <ProfitValue>{details.profit}</ProfitValue>
                    </DetailRow>
            </CardDetails>
            </>
            )}
         </BgContainer>
         )
}

export default ReferralDetail
