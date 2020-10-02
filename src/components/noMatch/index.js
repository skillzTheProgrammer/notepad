import React from 'react'
import { NoteImage } from '../register/style'
import Image from '../../assets/images/noteImage.png'
import { NoteParagraph } from '../../global/style'
import { NomatchDiv } from './style'

export default function NoMatch() {
    return (
        <NomatchDiv>
            <NoteImage src={Image} alt='note Image' />
            <NoteParagraph weight="bolder">No Match Found</NoteParagraph>
        </NomatchDiv>
    )
}
