import styled from "styled-components";
import background from '../../assets/images/background-image.png'

export const Wrapper = styled.div`
   background-image: url(${background});
   backdrop-filter: blur(7px);
   background-size: cover;
   @media screen and (max-width: 414px){
        max-width: 414px;
        background-size: cover;
        
        
    }
    
    
    
`;

export const Content = styled.div`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    height: auto;
    min-height: 787px;
    background-color: rgba(46, 15, 89,0.6);
    @media screen and (max-width: 414px){
        min-height: 490px;
        text-align: center;
    }

`;

export const WelcomeText = styled.div`
   width: 500px;
   
   padding-top: 33px;
   margin-left: 80px;
   color: white;
   @media screen and (max-width: 414px){
       display: none;
    }
`;

export const Toggle = styled.div`
    width: 405px;
    height: 50px;
    background-color: rgba(242, 242, 242, 1);
    border-radius: 20px;
    justify-self: center;
    align-self: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    margin: 100px auto auto auto;
    transition: all 2s;
    
    @media screen and (max-width: 414px){
       width: 247px;
       height: 37px;
       margin: 15px auto 40px auto;

    }
`;

export const Button = styled.button`
    width: 200px;
    height: 50px;
    background-color: rgba(46,15,89,1);
    border-radius: 20px;
    cursor: pointer;
    color: rgba(255, 255, 255, 1);
    transition: all 2s;
    @media screen and (max-width: 414px){
       width: 127px;
       height: 38px;
       margin: auto auto auto auto;
       
    }
    
`;
export const Button2 = styled.button`
    width: 200px;
    height: 50px;
    border-color: transparent;
    cursor: pointer;
    color: rgba(46, 15, 89, 1);
    @media screen and (max-width: 414px){
        width: 119.57px;
       height: 29.89px;
       margin: auto auto auto auto;
    }
    
`;

export const TextButton = styled.h3`
    font-weight: 700;
    size: 25px;
    font-style: "Roboto";
    @media screen and (max-width: 414px){
        size: 15px;
        margin: auto auto auto auto;
    }
`;
export const TextButton2 = styled.h3`
    font-weight: 700;
    size: 25px;
    font-style: "Roboto";
    @media screen and (max-width: 414px){
        size: 15px;
        margin: auto auto auto auto;
    }
`;

export const Input2 = styled.input`
     @media screen and (min-width: 415px){
        display: none;
    };
    @media screen and (max-width: 414px){
        width: 365px;
        height: 45px;
        border-radius: 10px;
        margin: 10px auto 10px auto;
        font-weight: 700;
        size: 15px;
        color: rgba(46,15,89,1);
    }
`;
export const Select = styled.select`
 @media screen and (min-width: 415px){
        display: none;
        option{
            display: none;
        }
    };
    @media screen and (max-width: 414px){
        width: 365px;
        height: 45px;
        border-radius: 10px;
        margin: 10px auto 10px auto;
        font-weight: 700;
        size: 15px;
        color: rgba(46,15,89,1);

       
    }

`;

export const WelcomeButton = styled.button`
    @media screen and (min-width: 415px){
        display: none;
    };

    @media screen and (max-width: 414px){
        width: 365px;
        height: 45px;
        border-radius: 10px;
        margin: 10px auto auto auto;
        background-color: rgba(217,11,66,1);
        border-color: transparent;
        justify-content: center;
        align-items: center;

        h3{
            color: white;
            margin-left: 7px;
        }
    }

`;



export const Overlay = styled.div`
width: 95%;
min-height: 319px;
background-color: white;
border-radius: 0 0 45px 45px;

margin-top: 100px;
margin-left: auto;
margin-right: auto;
margin-bottom: 20px;
@media screen and (max-width: 414px){
       display: none;
    }
`;
export const SubOverlay = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
padding-top: 50px
`;

export const OverlayContent = styled.div`
    margin: auto auto auto auto;
    color: rgba(46,15,89,1)
`; 
export const Input = styled.input`
width: 150px;
height: 60px;
font-weight: 500;
font-size: large;
color: rgba(0,0,0,1);
`;

export const Search = styled.button`
    width: 150px;
    height: 60px;
    margin-top: 70px;
    background-color: rgba(217, 11, 66,1);
    border-color: transparent;
    display: flex;
    cursor: pointer;
    border-radius: 5px;
`;
export const SearchIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-top: 15px;
`;

export const More = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto 350px auto 62px;
    flex-wrap: wrap;
    h3{
        color: rgba(46,15,89,1);
        font-weight: 700;
        size: 25px;
    };
    @media screen  and (max-width: 414px){
        padding: 2px;
        
        margin: 0px 0px 0px 0px;
        
        

        h3{
        color: white;
        
        
        
    };
    }
`;

export const MoreContent = styled.div`
display: flex;
align-items: center;

h4{
    font-weight: 400;
    size: 15px;
};
@media screen and (max-width: 414px)  {
    color: white;
    width: 210px;
}
`;
export const MoreContentMobile = styled.div`
display: flex;
align-items: center;
color: white;
margin: auto auto auto auto;
justify-content: center;

@media screen and (min-width: 415px){
    display: none;
}
h4{
    font-weight: 700;
    size: 15px;
};

`;

export const Check = styled.input`
margin-right: 10px;

@media screen and (max-width: 414px){
   box-sizing: border-box;
   border: 1px solid #FFFFFF;
   margin-right: 3px;
   height: 15px;
   width: 15px;
   
}
`;
export const Heading = styled.div`
display: contents;

@media screen and (min-width: 415px){
    display: none;
    
}
`;
export const MoreContentDetails = styled.div`
@media screen and (max-width: 414px){
   
    -webkit-column-count: 2;
       -moz-column-count: 2;
            column-count: 2;
            
}
`;
export const Checked = styled.span`
height: 15px;
  width: 15px;
  background-color: transparent;
  border: 1px solid #FFFFFF;
  margin-right: 1px;
  box-sizing: border-box;
  margin-left: 6px;
`;