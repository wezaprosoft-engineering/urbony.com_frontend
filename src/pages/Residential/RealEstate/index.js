import React ,{useState, useEffect} from "react";
import { CardButton, Content, Head, Line, Title, Wrapper } from "../../../components/Popular/Popular.styles";
import { Input } from "../../../components/WelcomeSection/Welcome.styles";
import { CardContent, Description, RealEstateCard, TextContent, Description2Text,WrapperDescription2,CardButtons, Description2, Description2Content, LineEstate } from "./RealEstate.styles";
import { useTranslation } from "react-i18next";
import { Filter } from "../../../components/PropertyForSell/PropertyForSell.styles";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Spinner";

const RealEstate = () =>{
    const {t} = useTranslation();
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);

    const url = 'https://urbony.onrender.com/api/projects'
    const [realEstate, setRealEstate] = useState('')
    const [ascending, setAscending] = useState(false)

    const realEstateProject = () => {
        try {
            setLoading(true)
            fetch(url,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjMxMzk1NDR9.CkIOYVAOZZNdpPbosprA9w0hCEwRyQLW0jdRaQUJTW4`
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
            }).then(json =>{
               console.log(json)
               setLoading(false)
               setRealEstate(json)
               
            }).catch(error =>{
                setLoading(false)
                console.log(error)
                
            });
        } catch (error) {
            
            console.log(error)
        }
    }

    useEffect(() =>{
        realEstateProject();
    }, []);

    const search= () =>{
        var result;
        
            if(ascending){
                result = realEstate?.sort((a,b) => b.price - a.price)
                setAscending(false)
            } else{
                result = realEstate?.sort((a,b) => a.price - b.price)
                setAscending(true)
            }
    
             
        
        console.log(result)
        
        setRealEstate(result)
    }
    return(
       <Wrapper>
        {loading? (<Loading/>):(
             <Content style={{display: 'grid'}}>
             <Head>
              <Title>
                  <Line style={{
                      border: '3px solid rgba(46,15,89,1)',
                      marginTop: 30,
                  }}/>
                  <h2 style={{
                      fontWeight: 500
                  }}>{t('realEstate.title')}</h2>
              </Title>
              {screen ? null: <Title style={{
                  marginTop: 55
              }}>
                      <h2 style={{
                              fontWeight: 500
                          }}>{t('propertyForSell.filterBy')}</h2>
                          <Filter onClick={search}>{ascending ? t('propertyForSell.descending'): t('propertyForSell.ascending')}</Filter>
                      </Title>}
              
             </Head>
             {screen? <Title style={{
                  marginTop: 10,
                  width: 270,
              }}>
                      <h2 style={{
                              fontWeight: 500
                          }}>{t('propertyForSell.filterBy')}</h2>
                          <Input placeholder={t('propertyForSell.price')} type='number' style={{
                              backgroundColor: 'rgba(46,15,89,1)',
                              textAlign: 'center',
                              width: 150,
                              height: 35,
                              borderRadius: 5,
                              color: 'white',
                              fontWeight: 500,
                              marginTop: 15,
                              marginLeft: 0,
                              borderColor: 'transparent'
                          }}/>
                      </Title>: null}
  
                      {realEstate.length > 0 ? <>
                      {realEstate.map(
                          estate =>(
                              <RealEstateCard key={estate.id}>
                          <CardContent style={{
                              backgroundImage: `url(${estate.coverImage})`,
                          }}>
  
                          </CardContent>
                          <TextContent>
                              <Description>
                              <h1>Showcase your Real Estate Project with us</h1>
                              <h2 style={{
                                  color: 'rgba(217, 11, 66, 1)',
                                  fontWeight: 500,
                                  
                              }}>Project Location</h2>
                             
  
                              <p style={{
                                  fontWeight: 400,
                                  marginTop: 80
                              }}>With a brief descripton of your real estate project
                              </p>
  
                              <h2 style={{fontWeight: 500,
                              color: 'rgba(46,15,89,1)',
                              
                              }} className='second'>{t('realEstate.delivery')} </h2>
                              
                              </Description>
                              <WrapperDescription2>
                              <h2 className="price">{t('realEstate.price')}</h2>
                              <Description2>
                                  
                                  <Description2Content>
                                  
                                  <LineEstate/>
                                  <Description2Text>
                                  <h2 style={{
                                      fontSize: 25,
                                      fontWeight: 500
                                  }}>Set up pricing</h2>
                                  <h2 style={{
                                      color: 'rgba(46,15,89,1)'
                                  }}>{(estate.price)?.toLocaleString()}</h2>
                                  </Description2Text>
                                  
                                  </Description2Content>
                                  <CardButtons onClick={()=>navigate(`/single-project/${estate.id}`)}>{t('realEstate.button')}</CardButtons>
                                  
                              </Description2>
                              </WrapperDescription2>
                              
                              
                          </TextContent>
             </RealEstateCard>
                          )
                      )}
                      </>: <h2>No real estate projects available</h2>}
             
             {screen ? null: <CardButton style={{
              margin: 'auto',
              marginTop: 120,
              marginBottom: 240,
              width: 574,
              height: 69,
              borderRadius: 10,
              fontSize: 30,
              fontWeight: 700,
              fontFamily: "robotto"
             }}>{t('realEstate.load')}</CardButton>}
             
          </Content>
        )}
       
       </Wrapper> 
    )
}

export default RealEstate