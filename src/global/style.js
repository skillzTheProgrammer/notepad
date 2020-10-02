import styled from 'styled-components/macro'

export const NoteContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    
`

export const NoteParagraph = styled.p`
    font-weight:${({weight})=>weight?weight:null};
    color:${({color})=>color?color:"black"}
`