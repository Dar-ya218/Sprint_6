import styled from "styled-components";
interface Props{
    img: string
}
export const StyledBackground = styled.div<Props>`
background-position: center;
background-size: cover;
height: 100vh;
width: 100vw;
background-attachment: fixed;
background-image: url(${({img})=>img});
background-repeat: no-repeat;
`
