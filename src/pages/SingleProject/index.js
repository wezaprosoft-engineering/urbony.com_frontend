import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Content, Details, DetailsContent, HouseImage, Wrapper } from "./SingleProject.styles";

const SingleProject = () =>{
    const {id} = useParams();
    const [project, setProject] = useState("")
    
    useEffect(() =>{
        const url = `https://urbony.onrender.com/api/project/${id}`
        const projectDetails = async () => {
            try {
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
                   setProject(json)
                   
                   
                }).catch(error =>{
                    console.log(error)
                    
                });
            } catch (error) {
                console.log(error)
            }
        }
    
        projectDetails();
        
    }, [id]);
    return(
        <Wrapper>
            <Content>
            <Details>
                <HouseImage src={project.coverImage}/>
                <h2 style={{color: 'rgba(46,15,89,1)'}}>Details</h2>
                <DetailsContent>
                    <h3>Name</h3>
                    <h3 style={{color: 'rgba(46,15,89,1)'}}>{project.name}</h3>
                </DetailsContent>
                <DetailsContent>
                    <h3>Location</h3>
                    <h3 style={{color: 'rgba(46,15,89,1)'}}>{project.location}</h3>
                </DetailsContent>
                <DetailsContent>
                    <h3>Total Number</h3>
                    <h3 style={{color: 'rgba(46,15,89,1)'}}>{project.numberOfUnits}</h3>
                </DetailsContent>
                <DetailsContent>
                    <h3>Price</h3>
                    <h3 style={{color: 'rgba(46,15,89,1)'}}>BIF {(project.price)?.toLocaleString()}</h3>
                </DetailsContent>
                <DetailsContent>
                    <h3>Details</h3>
                    <div style={{width: '60%'}}>
                    <h3 style={{color: 'rgba(46,15,89,1)'}}>{project.description}</h3>
                    </div>
                    
                </DetailsContent>
                <DetailsContent>
                    <h3>Delivery Date</h3>
                    <h3 style={{color: 'rgba(46,15,89,1)'}}>{(project.finishDate)?.toLocaleString()}</h3>
                </DetailsContent>
                <DetailsContent>
                    <h3>Type of property</h3>
                    <h3 style={{color: 'rgba(46,15,89,1)'}}>{project.propertyType?.name}</h3>
                </DetailsContent>
                
                
            </Details>
            </Content>
        </Wrapper>
    )
}

export default SingleProject;