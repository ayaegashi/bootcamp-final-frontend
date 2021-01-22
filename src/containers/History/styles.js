import styled from 'styled-components'

export const Table = styled.table`
  border-collapse: collapse;
  background-color: white;
`

export const TRHeader = styled.tr`
  background-color: #dedede;
  border-top: black 1px solid;
  border-bottom: black 1px solid;
`

export const Tr = styled.tr`
  &:hover{
    background-color:#ececec 
  }
`

export const THDate = styled.th`
    font-size: 1.5em;
    width: 150px;
`

export const THLink = styled.th`
    font-size: 1.5em;
    width: 300px;
`

export const TDDate = styled.th`
    width: 150px;
`

export const TDLink = styled.th`
    width: 500px;
`

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
  font-size: 4em;
  margin: 0px;
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
