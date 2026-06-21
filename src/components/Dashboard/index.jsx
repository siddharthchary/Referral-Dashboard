import {useState,useEffect} from "react" 
import { useNavigate } from "react-router-dom"
import HeadingSec from "../HeadinSec"
import Cookies from "js-cookie"
import {BgContainer,Description,AllReferalsContainer,RefCodeContainer,Header,CopyBtn,RefCode,DetailThree,DetailTwo,DetailOne,DescriptionOne,MainContainer,OverviewCOntainer,OverviewHead,RowUl,ServiceContainer,Servicecard,ReferralsSectionContainer,SectionHeader,FilterControlsBar,FilterGroup,FilterLabel,SearchInputField,SortDropdownSelect,TableWrapper,TableElement,TableHead,TableRow,TableHeaderCell,TableBody,TableFooter,FooterText,PaginationContainer,PaginationButton} from "./StyledComponents"
import EachOverviewCard from "../EachOverviewCard"

import ReferralRow from "../RefferalRow"
const Dashboard = ()=>{
    const [dashboardData, setDashboardData] = useState([])
    const [referralList, setreferralList] = useState([])
    
    const [referral, setreferral] = useState({})
    const [summary, setSummary] = useState()

    const [isLoading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState("");


  const [searchTerm, setSearchTerm] = useState('');
  const [sortByDate, setSortByDate] = useState('newest');

    
    const navigate = useNavigate()

// 1. Add current page state initialized to 1
const [currentPage, setCurrentPage] = useState(1)
    
    

    const fetchDashboardData = async ()=>{
        const jwtToken = Cookies.get("jwt_token") 
        console.log(jwtToken)
        if (!jwtToken) {
            navigate("/login");
            return;
        }                     


        const url  = "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals"
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}` 
            }
        }
        try{
            const response = await fetch(url,options)
            const data = await response.json()

            if(response.ok){
                console.log(data)
                setDashboardData(data.data.metrics)
                setSummary(data.data.serviceSummary)
                setreferral(data.data.referral)
                setreferralList(data.data.referrals)
                setLoading(false)
            }

        }catch(error){
            setErrorMsg(error)
            setLoading(false)
        }

    }
    useEffect(()=>{

        fetchDashboardData();
    },[])

    useEffect(() => {
    setCurrentPage(1);
}, [searchTerm, sortByDate]);

   const getFilteredAndSortedData = () => {
    let updatedList = [...referralList]

    if (searchTerm.trim() !== "") {
        updatedList = updatedList.filter(
            item => 
                (item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (item.service && item.serviceName.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        
    }

    return updatedList.sort((a, b) => {
        const timeA = new Date(a.date)
        const timeB = new Date(b.date)
        return sortByDate === 'newest' ? timeB - timeA : timeA - timeB
    })
}

const allFilteredReferrals = getFilteredAndSortedData()
const totalEntries = allFilteredReferrals.length

// 2. Pagination Math Setup (Exactly 10 entries per page)
const entriesPerPage = 10
const totalPages = Math.ceil(totalEntries / entriesPerPage) || 1

const indexOfLastEntry = currentPage * entriesPerPage
const indexOfFirstEntry = indexOfLastEntry - entriesPerPage

// 3. Slice the array down to exactly 10 active items for the current view
const displayedReferrals = allFilteredReferrals.slice(indexOfFirstEntry, indexOfLastEntry)

// Generate list array bounds for pagination buttons (e.g., [1, 2, 3, 4, 5])
const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)



    console.log(dashboardData)

    return(
        <BgContainer>
            <HeadingSec />
            {isLoading ? "" : (<MainContainer>
                <Header>Refferal Dashboard</Header>
                <DescriptionOne>Track your refferals, earnings, and partner acitivity in one place. </DescriptionOne>
                <OverviewCOntainer>
                    <OverviewHead>Overview</OverviewHead>
                    <RowUl>
                        {dashboardData.map(each=>(<EachOverviewCard key={each.id} each={each} />) )}
                    </RowUl>
                </OverviewCOntainer>
                <ServiceContainer>
                    <OverviewHead>Service Summary</OverviewHead>
                    <RowUl>
                        <Servicecard>
                            <DetailOne>SERVICE</DetailOne>
                            <DetailTwo>{summary.service}</DetailTwo>
                        </Servicecard>
                        <Servicecard>
                            <DetailOne>YOUR REFERRALS</DetailOne>
                            <DetailThree>{summary.yourReferrals}</DetailThree>
                        </Servicecard>
                        <Servicecard>
                            <DetailOne>ACTIVE REFERRALS</DetailOne>
                            <DetailThree>{summary.activeReferrals}</DetailThree>
                        </Servicecard>
                        <Servicecard>
                            <DetailOne>TOTAL REF.EARNINGS</DetailOne>
                            <DetailThree>{summary.totalRefEarnings}</DetailThree>
                        </Servicecard>
                    </RowUl>
                </ServiceContainer>
                <ServiceContainer>                    
                    <OverviewHead>Refer friends and earn more</OverviewHead>
                    <DetailOne>YOUR REFERRAL LINK</DetailOne>
                    <RowUl>
                        <RefCodeContainer>
                            <RefCode>{referral.link}</RefCode>
                        </RefCodeContainer>
                        <CopyBtn>Copy</CopyBtn>
                        <RefCodeContainer>
                            <RefCode>{referral.code}</RefCode>
                        </RefCodeContainer>
                        <CopyBtn>Copy</CopyBtn>
                    </RowUl>
                </ServiceContainer>
                
                        <ReferralsSectionContainer>
                        {/* Top Heading */}
                        <SectionHeader>All referrals</SectionHeader>
                        
                        {/* Interactive Inputs Row */}
                        <FilterControlsBar>
                            {/* Left Side Search Input */}
                            <FilterGroup>
                            <FilterLabel>Search</FilterLabel>
                            <SearchInputField
                                type="text"
                                placeholder="Name or service..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            </FilterGroup>

                            {/* Right Side Sort Selection Dropdown */}
                            <FilterGroup>
                            <FilterLabel>Sort by date</FilterLabel>
                            <SortDropdownSelect
                                value={sortByDate}
                                onChange={(e) => setSortByDate(e.target.value)}
                            >
                                <option value="newest">Newest first</option>
                                <option value="oldest">Oldest first</option>
                            </SortDropdownSelect>
                            </FilterGroup>
                        </FilterControlsBar>
                         {/* Core Data Presentation Table Layer Rendering */}
                            <TableWrapper>
                                <TableElement>
                                    <TableHead>
                                        <TableRow>
                                            <TableHeaderCell>NAME</TableHeaderCell>
                                            <TableHeaderCell>SERVICE</TableHeaderCell>
                                            <TableHeaderCell>DATE</TableHeaderCell>
                                            <TableHeaderCell>PROFIT</TableHeaderCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {displayedReferrals.map((eachReferral, index) => (
                                            <ReferralRow 
                                                key={eachReferral.id || index} 
                                                referralData={eachReferral} 
                                            />
                                        ))}
                                        {displayedReferrals.length === 0 && (
                                            <TableRow>
                                                <td colSpan="4" style={{ textAlign: 'center', padding: '32px', color: '#94a3b8', fontSize: '14px' }}>
                                                    No referrals found matching your active filter criteria.
                                                </td>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                    <TableFooter>
                                            {/* Dynamic item bounds counter calculations */}
                                            <FooterText>
                                                Showing {totalEntries === 0 ? 0 : indexOfFirstEntry + 1}–
                                                {indexOfLastEntry > totalEntries ? totalEntries : indexOfLastEntry} of {totalEntries} entries
                                            </FooterText>
                                            
                                            <PaginationContainer>
                                                {/* Previous Control Trigger */}
                                                <PaginationButton 
                                                    disabled={currentPage === 1}
                                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                                >
                                                    Previous
                                                </PaginationButton>
                                                
                                                {/* Dynamic Numeric Page Selector Layout mapping list bounds */}
                                                {pageNumbers.map((page) => (
                                                    <PaginationButton 
                                                        key={page} 
                                                        isActive={page === currentPage}
                                                        onClick={() => setCurrentPage(page)}
                                                    >
                                                        {page}
                                                    </PaginationButton>
                                                ))}
                                                
                                                {/* Next Control Trigger */}
                                                <PaginationButton 
                                                    disabled={currentPage === totalPages}
                                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                                >
                                                    Next
                                                </PaginationButton>
                                            </PaginationContainer>
                                        </TableFooter>
                                    </TableElement>
                            </TableWrapper>
                        </ReferralsSectionContainer>               
            </MainContainer>)}
            
        </BgContainer>
    )
    
}

export default Dashboard