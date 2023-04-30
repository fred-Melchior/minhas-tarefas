import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/colors'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  height: 64px;
  width: 64px;
  background-color: ${colors.verde};
  color: #fff;
  position: fixed;
  text-decoration: none;
  border-radius: 50%;
  bottom: 40px;
  right: 40px;
`
