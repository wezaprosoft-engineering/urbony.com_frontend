import React ,{useState} from "react";
import { Arrow, Content, Head, Home, Line, Title, Wrapper,  CorporateContent } from "./Popular.styles";
import arrow from '../../assets/images/arrow.svg'
import House1 from '../../assets/images/house1.png'
import House2 from '../../assets/images/house2.png'
import House3 from '../../assets/images/house3.png'
import { useGlobalState } from "../../store/state";
import HomeCard from '../HomeCards/index';
import CorporateCards from "../CorporateCards";


const Popular = props => {
    const [Corporate] = useGlobalState("corporate")
    const [offices, setOffices] = useState(true)
    const [stores, setStores] = useState(false)
    const [industrial, setIndustrial] = useState(false)

    const [Industrial] = useGlobalState("industrialSpace")
    const [Offices] = useGlobalState("offices")
    const [Commercial] = useGlobalState("commercialSpace")


    

    const handleOffice = () =>{
        setOffices(true)
        setStores(false)
        setIndustrial(false)
    }
    const handleStores = () =>{
        setOffices(false)
        setStores(true)
        setIndustrial(false)
    }
    const handleIndustrial = () =>{
        setOffices(false)
        setStores(false)
        setIndustrial(true)
    }
    return(
        <Wrapper>
            <Content style={{
                margin:`${props.margin}`
            }}>
                <Title>
                    <Head>
                        
                    <Line/>
                    {Corporate ? <h3>Our Latest Deals</h3>:<h3>Popular</h3>}
                    </Head>

                    <Head style={{
                        color: "rgba(217,11,66,1)"
                        }}>
                        <h3>Explore All</h3>
                        <Arrow src={arrow}/>
                        
                        
                        
                        
                    </Head>
                   
                </Title>
                {Corporate ? <CorporateContent>
                    {offices ? <h2 style={{
                    size: 35,
                    fontWeight: 700,
                    textDecoration: `${props.underline}`,
                    color: 'red'
                }} >{props.Offices}</h2>: <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700,
                    cursor: "pointer"
                    
                }} onClick={handleOffice}>{props.Offices}</h2>}
                    
                {stores ? <h2 style={{
                    
                    size: 35,
                    fontWeight: 700,
                    textDecoration: `${props.underline}`,
                    color: 'red'
                }}>{props.Stores}</h2>: <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700,
                    cursor: "pointer"
                    
                }} onClick={handleStores}>{props.Stores}</h2>}
                
                {industrial
                 ? <h2 style={{
                    size: 35,
                    fontWeight: 700,
                    textDecoration: `${props.underline}`,
                    color: 'red'
                }}>{props.Industrial}</h2>: <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700,
                    cursor: "pointer"
                }} onClick={handleIndustrial}>{props.Industrial}</h2>}
                

                </CorporateContent>: <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700
                }}>Our Popular Homes</h2>}
                
                {Industrial || Commercial || Offices ? <Home>
                    <CorporateCards buttonText="Book Now" buttonColor="rgba(217, 11, 66 ,1)" housePicture={House1}/>
                    <CorporateCards buttonText="Book Now" buttonColor="rgba(217, 11, 66 ,1)" housePicture={House1}/>
                    <CorporateCards buttonText="Book Now" buttonColor="rgba(217, 11, 66 ,1)" housePicture={House1}/>
                </Home>: <Home>
                    <HomeCard buttonText="Book Now" buttonColor="rgba(217, 11, 66 ,1)" housePicture={House1} />
                    <HomeCard buttonText="Book Now" buttonColor="rgba(217, 11, 66 ,1)" housePicture={House2} />
                    <HomeCard buttonText="Book Now" buttonColor="rgba(217, 11, 66 ,1)" housePicture={House3} />
                </Home>}

                
                
            </Content>
        </Wrapper>
    )
}

export default Popular;