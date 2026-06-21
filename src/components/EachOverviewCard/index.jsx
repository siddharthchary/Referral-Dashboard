import {CardContainer,Numbers,Text} from "./StyledComponents"

const EachOverviewCard = (props)=>{
    const {each} = props
    const {label,value,kind} = each


    return(
        <CardContainer>
            <Numbers>{value}</Numbers>
            <Text>{label}</Text>

        </CardContainer>
    )
}
export default EachOverviewCard