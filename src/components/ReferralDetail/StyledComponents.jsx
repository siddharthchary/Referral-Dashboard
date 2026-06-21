import styled from "styled-components";

export const BgContainer = styled.div`
height: 100vh;
width: 100vw;
overflow-y: auto;
display:  flex;
flex-direction: column;
background-color: #C4EBF5;
padding-left: 20px;
`
export const CardDetails = styled.div`
height: 50vh;
width: 500px;
display: flex;
flex-direction: column;
padding: 10px;
background-color: #ffffff;
border-radius: 10px;
margin: 20px;
margin-left: 90px;
`
export const Header= styled.h1`
margin: 20px;
margin-left: 90px;
font-family: "Roboto";
font-size: 32px;
margin-bottom: 0px;
`
export const Desscription = styled.p`
margin: 20px;
margin-left: 90px;
font-size: 18px;
`
export const ButtonOne =styled.button`
cursor: pointer;
margin: 20px;
margin-left: 90px;
align-self: flex-start;
background-color: transparent;
color: #122be7e1;
font-size: 16px;
border: none;
border-radius: 8px;
`


export const CardHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 28px;
  margin-bottom: 16px;
`;


export const PartnerName = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

export const ServiceBadge = styled.span`
  color: #000000;
  font-size: 12px;
  font-weight: 600;
`;


export const DetailRow = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid #f8fafc;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const FieldLabel = styled.span`
  width: 200px;
  font-size: 11px;
  font-weight: 600;
  color: #94a3b8;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const FieldValue = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #1e293b;
`;

export const ProfitValue = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
`;
