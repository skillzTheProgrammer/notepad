import React from 'react'
import { useEffect } from 'react'
import Icon from '../../assets/icons/book.png'
import Image from '../../assets/images/noteImage.png'
import colors from '../../global/colors'
import { NoteContainer, NoteParagraph } from '../../global/style'
import { NoteButton, NoteForm, NoteHead, NoteImage, NoteInput, NoteLink } from '../register/style'

export default function Login({history}) {

    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem('userData'))
        if(userData){
            const username = userData.username.length < 0
            const password = userData.password.length < 0
            console.log(userData)
            console.log(history)
            console.log(username)
            if(username && password){
                history.push('/join')
                
            }
        }else{
            history.push('/join')
        }
        
    })
    return (
        <NoteContainer>
            <NoteHead>
                <NoteImage src={Icon} alt="icon" /> 
                <NoteParagraph>
                    <b>Note Pad</b>
                </NoteParagraph>
            </NoteHead>
            <NoteImage width="70%" margin="50px 0 0 0"  src={Image} alt="note image" />
            <NoteParagraph weight="900">Login</NoteParagraph>
            <NoteForm margin="39px 0 0 0" >
                <NoteInput placeholder="Username" required/><br />
                <NoteInput type="password" placeholder="password" required/><br />
                <NoteButton>Log in</NoteButton>
            </NoteForm>
            <NoteParagraph color={colors.fadedBrandColor} weight="900">Welcome Back</NoteParagraph>
        </NoteContainer>
    )
}
