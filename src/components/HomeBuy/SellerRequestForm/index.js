import React from "react";
import { CardButton, Content, Head, Line, Title, Wrapper } from "../Popular/Popular.styles";
import { Container, InputRequest, RequestForm, Star} from "./SellerRequestForm.styles";

const SellerRequestForm = () => {
    return (
        <Wrapper style={{
            height: '1000px'
        }}>
            <Content>
                <Title>
                    <Head>
                        <Line/>
                        <h3>You too can sell better, faster and easier with Urbony!</h3>
                    </Head>
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
                        <h2>Postal code of property sale<Star>*</Star></h2>
                        <InputRequest placeholder="Enter postal code"/>
                    </Container>
                    <Container>
                        <h2>Type of property<Star>*</Star></h2>
                        <InputRequest placeholder="House"/>
                    </Container>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}><input type="checkbox" style={{
                        marginRight: 20
                    }}/>
                    <h4>I have read and accept the general conditions and tehe privacy policy of the site <Star>*</Star></h4>
                    </div>
                    <div style={{width: '100%'}}><h3>Fields marked <Star>*</Star> are mandatory</h3></div>
                    <CardButton 
                    style={{
                        width : '100%'
                    }}
                    >Submit Request</CardButton>
                    
                    
                </RequestForm>
            </Content>
        </Wrapper>
    )
}

export default SellerRequestForm;