import styled from 'styled-components'

export const PageContainer = styled.div`
  @import url('${props => props.theme.fontSource}');

  font-family: ${props => props.theme.fonts.body.fontFamily};
  width: 55%;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.yellow};
`

export const Title = styled.h1`
  @import url('${props => props.theme.fontSource}');

  font-family: ${props => props.theme.fonts.header.fontFamily};
  font-size: 3em;
  margin: 0px;
`

export const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
`