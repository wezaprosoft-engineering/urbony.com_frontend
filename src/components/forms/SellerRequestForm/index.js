import React from "react";
import { CardButton, Content, Head, Line, Title, Wrapper } from "../../Popular/Popular.styles";
import { Container, InputRequest, RequestForm, Star} from "./SellerRequestForm.styles";
import { useGlobalState } from "../../../store/state";
const SellerRequestForm = props => {
    const [rent] = useGlobalState("rent")
    
    return (
        <Wrapper style={{
            height: '1000px'
        }}>
            <Content>
                <Title>
                    <Head>
                        <Line/>
                        <h3>{props.text}</h3>                   </Head>
                </Title>
                <RequestForm>
                    <Container>
                        <h2>Last Name<Star>*</Star></h2>
                        <InputRequest placeholder="Enter your last name" inputMode="text"/>
                    </Container>
                    <Container>
                        <h2>First Name<Star>*</Star></h2>
                        <InputRequest placeholder="Enter your first name" inputMode="text"/>
                    </Container>
                    <Container>
                        <h2>Email Address<Star>*</Star></h2>
                        <InputRequest placeholder="Enter your email address" inputMode="email"/>
                    </Container>
                    <Container>
                        <h2>Phone number<Star>*</Star></h2>
                        <InputRequest placeholder="Enter your phone number" inputMode="numeric"/>
                    </Container>
                    <Container>
                        <h2>Location of property sale<Star>*</Star></h2>
                        <InputRequest placeholder="Enter location"/>
                    </Container>
                    <Container>
                        <h2>Type of property<Star>*</Star></h2>
                        <select style={{
                            width: 513,
                            height: 45,
                            fontSize: 20,
                            fontWeight: 400,
                            color: 'rgba(46,15,89,1)',
                            borderRadius: 5
                        }}>
                            <option disabled>Select type of property</option>
                            <option value="Commercial Property">Commercial Property</option>
                            <option value="Industrial Property">Industrial Property</option>
                            <option value="Retail Property">Retail Property</option>
                            <option value="Mixed-use Property">Mixed-use Property</option>

                        </select>
                    </Container>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}><input type="checkbox" style={{
                        marginRight: 20
                    }}/>
                    <h4>I have read and accept the general conditions and the privacy policy of the site <Star>*</Star></h4>
                    </div>
                    <div style={{width: '100%'}}><h3>Fields marked <Star>*</Star> are mandatory</h3></div>
                    {rent? <CardButton 
                    style={{
                        width : '100%',
                        backgroundColor: 'red'
                    }}
                    >Submit Request</CardButton>: <CardButton 
                    style={{
                        width : '100%',
                        
                    }}
                    >Submit Request</CardButton>}
                    
                    
                </RequestForm>
            </Content>
        </Wrapper>
    )
}

export default SellerRequestForm;