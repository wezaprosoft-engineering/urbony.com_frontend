import React ,{useState} from "react";
import { Arrow, Content, Head, Home, Line, Title, Wrapper,  CorporateContent } from "./Popular.styles";
import arrow from '../../images/arrow.svg'
import House1 from '../../images/house1.png'
import House2 from '../../images/house2.png'
import House3 from '../../images/house3.png'
import { useGlobalState } from "../../state";
import HomeCard from '../HomeCards/index';


const Popular = () => {
    const [Corporate] = useGlobalState("corporate")
    const [offices, setOffices] = useState(true)
    const [stores, setStores] = useState(false)
    const [industrial, setIndustrial] = useState(false)

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
            <Content>
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
                    textDecoration: 'underline',
                    color: 'red'
                }} >Offices</h2>: <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700,
                    cursor: "pointer"
                    
                }} onClick={handleOffice}>Offices</h2>}
                    
                {stores ? <h2 style={{
                    
                    size: 35,
                    fontWeight: 700,
                    textDecoration: 'underline',
                    color: 'red'
                }}>Stores</h2>: <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700,
                    cursor: "pointer"
                    
                }} onClick={handleStores}>Stores</h2>}
                
                {industrial
                 ? <h2 style={{
                    size: 35,
                    fontWeight: 700,
                    textDecoration: 'underline',
                    color: 'red'
                }}>Industrial</h2>: <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700,
                    cursor: "pointer"
                }} onClick={handleIndustrial}>Industrial</h2>}
                

                </CorporateContent>: <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700
                }}>Our Popular Homes</h2>}
                
                

                <Home>
                    <HomeCard buttonText="Book Now" buttonColor="rgba(217, 11, 66 ,1)" housePicture={House1} />
                    <HomeCard buttonText="Book Now" buttonColor="rgba(217, 11, 66 ,1)" housePicture={House2} />
                    <HomeCard buttonText="Book Now" buttonColor="rgba(217, 11, 66 ,1)" housePicture={House3} />
                </Home>
                
            </Content>
        </Wrapper>
    )
}

export default Popular;