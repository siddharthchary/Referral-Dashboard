import React from 'react'

import {Link} from "react-router-dom"
import { TableRow, TableCell, ProfitCell } from './StyledComponents'

const ReferralRow = (props) => {
    const { referralData } = props
    const { id,name, serviceName, date, profit } = referralData

    

    return (
        
        <TableRow>
            <Link  to={`/referrals/${id}`}>
            <TableCell fontMedium>{name}</TableCell>
             </Link>
            <TableCell>{serviceName}</TableCell>
            <TableCell>{date}</TableCell>
            <ProfitCell>{profit}</ProfitCell>
           
        </TableRow>
        
    )
}

export default ReferralRow