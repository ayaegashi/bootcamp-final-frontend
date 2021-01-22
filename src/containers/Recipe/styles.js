import styled from 'styled-components'

export const UList = styled.ul`
  list-style-type: none;
  padding: 0px;
`

export const OList = styled.ol`
  margin-left: 20px;
  padding: 0px;
`

export const Button = styled.button`
`

export const ButtonPanel = styled.div`
  margin: 10px 0px 20px 0px;
  display: flex;
  justify-content: space-between;
  width: 50px;
`

export const ListItem = styled.li`
  @import url('${props => props.theme.fontSource}');

  font-family: ${props => props.theme.fonts.body.fontFamily};
  font-size: 14px;
`

export const LeftPanel = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 70px;
  background-color: ${props => props.theme.colors.orange};
`

export const Title = styled.h1`
  @import url('${props => props.theme.fontSource}');

  font-family: ${props => props.theme.fonts.header.fontFamily};
  font-size: 3em;
  margin: 0px;
`

export const Subtitle = styled.h2`
  @import url('${props => props.theme.fontSource}');

  font-family: ${props => props.theme.fonts.header.fontFamily};
  font-size: 1.5em;
`

export const IngredientsContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  margin-left: 70px;
`

export const StepsContainer = styled.div`
  border-left: 1px solid black;
  width: 1000px;
  padding: 40px;
  display: flex;
  flex-direction: column;
`

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  /* justify-content: space-evenly; */
  background-color: ${props => props.theme.colors.yellow};
`
