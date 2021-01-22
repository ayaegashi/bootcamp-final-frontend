import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.yellow};
`

export const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
`

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AddContainer = styled.div`
  width: 35%;
`

export const DescContainer = styled.div`
  @import url('${props => props.theme.fontSource}');

  font-family: ${props => props.theme.fonts.body.fontFamily};
  width: 55%;
`

export const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
