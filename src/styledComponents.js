import styled from 'styled-components'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

export const Button = styled.button`
  background-color: transparent;
  border: 0px;
  color: ${props => props.bgColor};
`
export const Button1 = styled.button`
  background-color: transparent;
  border: 0px;
  color: ${props => props.bgColor};
`
export const Button2 = styled.button`
  background-color: transparent;
  border: 0px;
  color: ${props => props.bgColor};
`
export const Bold = styled(VscBold)`
  color: ${props => props.bgColor};
`

export const Italic = styled(GoItalic)`
  color: ${props => props.bgColor};
`
export const Under = styled(AiOutlineUnderline)`
  color: ${props => props.bgColor};
`
export const Textarea = styled.textarea`
  background-color: transparent;
  width: 40vw;
  height: 80vh;
  outline: none;
  border: 0px;
  color: #f1f5f9;
  font-size: 18px;

  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
`
