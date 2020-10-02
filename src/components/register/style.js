import styled from 'styled-components/macro'
import colors from '../../global/colors'
import {Link} from 'react-router-dom'

export const NoteHead = styled.div`
    display: flex;
    align-self: flex-start;
    margin-top: 15px;
`

export const NoteImage = styled.img`
    margin:${(props)=>props.margin? props.margin : null}

`

export const NoteForm = styled.form`
    
    display:flex;
    flex-flow: column wrap;
    align-items: center;
    width:90%;
    margin:${(props)=>props.margin? props.margin : null}
`

export const NoteInput = styled.input`
    width:100%;
    height: 50px;
    padding: 15px;
    border-radius: 5px;
    border: 2px solid #FB6900;
    box-sizing: border-box;
`
export const NoteButton = styled.button`
    height: 47px;
    width: 100%;
    border-radius: 5px;
    color:white;
    background-color: ${colors.brandColor};
    border: none;

    &:hover{
        background-color: #A54302; 
    }
`
export const NoteLink = styled(Link)`
    text-decoration: none;
`