import React from "react"; 
import styled  from 'styled-components';

const Wrapper = styled.img `
width: 90%;
height:90%;
object-fit: cover;
`;
const UnsplashImages = ({url}) => {
    return <Wrapper src={url} alt=""/>
}
export default UnsplashImages;
