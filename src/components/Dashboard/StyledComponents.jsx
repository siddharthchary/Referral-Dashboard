import styled from "styled-components" 


export const BgContainer = styled.div`
height: 100vh;
width: 100vw;
overflow-y: auto;
display:  flex;
flex-direction: column;
background-color: #C4EBF5;
padding-left: 20px;
`
export const MainContainer = styled.div`
width: 85%;
align-self: center;
display: flex;
flex-direction: column;
align-items: flex-start;
`
export const Header = styled.h1`
font-family: "Roboto";
font-size: 32px;
margin-bottom: 0px;
`
export const DescriptionOne = styled.p`
margin-top: 2px;
color: #b3aaaab6;
font-size: 15px;`


export const OverviewCOntainer = styled.div`
height: 55vh;
width: 100%;
border-radius: 20px;
background-color: #ffffff;
padding: 10px;
padding-top: 5px;


`
export const OverviewHead = styled.p`
margin-top: 5px;
color: #000000;
font-size: 22px;
`
export const RowUl = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;`

export const ServiceContainer = styled(OverviewCOntainer)`
height: 30vh;
margin-top: 20px;
margin-bottom: 20px;
`
export const Servicecard = styled.div`
height: 100px;
width: 250px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 4px;
background-color: #C4EBF5;
margin: 10px;
padding: 10px;
padding-left:20px;
border-radius: 12px;
`
export const DetailOne = styled.p`
color: #3f3a3a80;
font-size: 13px;
font-weight: bold;
margin-bottom: 0px;`

export const DetailTwo = styled.p`
margin-top: 2px;

color: #1a1af1;
font-size: 18px;`

export const DetailThree = styled(DetailTwo)`
color: #000000;`
export const CopyBtn = styled.button`
background-color: #122be7e1;
height: 30px;
border: none;
border-radius: 8px;
color: #ffffff;

`
export const RefCodeContainer = styled.div`
width: 40%;
height: 20px;
border: 1px, solid,#aee7f4eb;
padding: 8px;
display: flex;
justify-content: flex-start;
align-items: center;
`
export const RefCode = styled.p`
font-size: 16px;

`
export const  AllReferalsContainer = styled.div`
height: 80vh;
width: 100%;
border-radius: 20px;
background-color: #ffffff;
padding: 10px;
padding-top: 5px;
margin-bottom: 25px;
`

// The main white panel box containing the entire section
export const ReferralsSectionContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.04);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

// "All referrals" section title styling
export const SectionHeader = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #1e293b;
`;

// Layout wrapper bar to split controls cleanly to left and right sides
export const FilterControlsBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

// Helper component container to group labels with fields side-by-side
export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// Subdued gray typography style matching your "Search" and "Sort by date" text
export const FilterLabel = styled.span`
  font-size: 13px;
  color: #94a3b8;
  font-weight: 500;
  white-space: nowrap;
`;

// Lightly bordered search box with subtle placeholder text
export const SearchInputField = styled.input`
  padding: 8px 16px;
  font-size: 13px;
  background-color: #ffffff;
  border: 1px solid #f1f5f9;
  border-radius: 8px;
  color: #334155;
  outline: none;
  width: 100%;
  min-width: 220px;
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #cbd5e1;
  }

  &:focus {
    border-color: #e2e8f0;
  }
`;

// Dropdown selector matching the clean border look and native arrow alignment
export const SortDropdownSelect = styled.select`
  padding: 8px 16px;
  font-size: 13px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  color: #334155;
  cursor: pointer;
  outline: none;
  min-width: 130px;
  transition: border-color 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://w3.org' viewBox='0 0 24 24' fill='none' stroke='%23334155' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 14px;
  padding-right: 36px;

  &:focus {
    border-color: #cbd5e1;
  }
`;

// ==========================================
// 1. Core Page Structure Styles
// ==========================================


// ==========================================
// 5. Data Presentation Table Components
// ==========================================

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
`;

export const ReferralRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const TableHead = styled.thead`
  background-color: #f8fafc;
  border-bottom: 1px solid #f1f5f9;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #f8fafc;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #fcfdfe;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 16px 24px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #64748b;
`;

export const TableCell = styled.td`
  padding: 16px 24px;
  font-size: 14px;
  color: ${props => (props.fontMedium ? '#1e293b' : '#64748b')};
  font-weight: ${props => (props.fontMedium ? '500' : '400')};
`;

export const ProfitCell = styled.td`
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #4f46e5;
`;

// ==========================================
// 6. Pagination Footer Controls
// ==========================================

export const TableFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterText = styled.span`
  font-size: 13px;
  color: #94a3b8;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.15s ease;
  
  /* Conditional dimensions styling rules */
  padding: ${props => (props.isActive ? '0' : '6px 12px')};
  width: ${props => (props.isActive ? '32px' : 'auto')};
  height: ${props => (props.isActive ? '32px' : 'auto')};
  background-color: ${props => (props.isActive ? '#4f46e5' : '#ffffff')};
  border: ${props => (props.isActive ? 'none' : '1px solid #e2e8f0')};
  color: ${props => (props.isActive ? '#ffffff' : props.disabled ? '#cbd5e1' : '#475569')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${props => (props.isActive ? '#4f46e5' : props.disabled ? '#ffffff' : '#f8fafc')};
    border-color: ${props => (props.isActive ? 'none' : props.disabled ? '#e2e8f0' : '#cbd5e1')};
  }
`;
