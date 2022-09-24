import styled from "styled-components";

export const Wrapper = styled.div`
min-height: 100vh;
padding: auto auto auto auto;
`;
export const Spinner = styled.div`
    border: 5px solid lightgrey;
    border-top: 5px solid rgba(46,15,89,1);
    border-radius: 50%;
    width: 90px;
    height: 90px;
    animation: spin 0.8s linear infinite;
    margin: 40vh auto;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;