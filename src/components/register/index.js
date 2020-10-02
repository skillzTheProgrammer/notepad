import React, { useState } from 'react'
import { NoteContainer, NoteParagraph } from '../../global/style'
import { NoteButton, NoteForm, NoteHead, NoteImage, NoteInput, NoteLink } from './style'
import Icon from '../../assets/icons/book.png'
import Image from '../../assets/images/noteImage.png'
import colors from '../../global/colors'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useEffect } from 'react'


export default function Register({history}) {

    const [userData,setUserData] = useLocalStorage("userData",{
        username:"",
        password:"",
        loginTimes: 0,
        notes:[]
    })

    const handleInput = (e)=>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    function handleRegistration(e){
        e.preventDefault();
        const username = userData.username.length > 0
        const password = userData.password.length > 0
        console.log(username,password)
        if(username && password){
            alert('welcome')
            history.push('/login')
            
        }

    }

    // useEffect(()=>{
    //     const userData = JSON.parse(localStorage.getItem('userData'))
        
    //         const username = userData.username.length < 0
    //         const password = userData.password.length < 0
    //         console.log(userData)
    //         console.log(history)
    //         console.log(username)
    //         if(username && password){
    //             history.push('/login')
                
       
    //     }
        
    // },[])

    return (
        <NoteContainer>

            <NoteHead>
                <NoteImage src={Icon} alt="icon" /> 
                <NoteParagraph weight="bolder">Note Pad</NoteParagraph>
            </NoteHead>

            <NoteImage width="70%" margin="50px 0 0 0"  src={Image} alt="note image" />

            <NoteParagraph weight="900">Register</NoteParagraph>

            <NoteForm margin="39px 0 0 0" >
                <NoteInput value={userData.username} name="username" onChange={handleInput} placeholder="Username" required/><br />
                <NoteInput value={userData.password} name="password" onChange={handleInput} type="password" placeholder="password" required/><br />
                <NoteButton onClick={handleRegistration}>Sign up</NoteButton>
            </NoteForm>

            <NoteLink to='/login'><NoteParagraph color={colors.fadedBrandColor} weight="900">Registered? Log in</NoteParagraph></NoteLink>

        </NoteContainer>
    )
}
