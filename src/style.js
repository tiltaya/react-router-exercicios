import styled from "styled-components"


export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: orange;
    height: 4rem;
    width: 100vw;
`

export const StyledButton = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid #000000;
color: #000000;
padding: 0.25em 1em;
width: 10rem;
height: 60%;
&:hover {
    background: #000000;
    color: orange;
    cursor: pointer;
}
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 40vh;
    width: 100vw;
`