import React, { useState, useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { USER_VIEWER } from './graphql'
import { PageContainer, Container, Title, THDate, THLink, TDDate, TDLink, Table, Tr, TRHeader } from './styles'
import { useHistory } from 'react-router-dom'


const History = () => {
    const history = useHistory()
    const [recipeTitles, setRecipeTitles] = useState([])

    const { data, loading, error } = useQuery(USER_VIEWER)
    if (error){
        console.log(error)
    }

    
    const getTitles = (url) => {
        const fetchData = async () => {
          const res = await fetch(url)
          const recipeData = await res.json()
          let newRecipeTitles = recipeTitles
          newRecipeTitles.push(recipeData.title)
          setRecipeTitles(newRecipeTitles)
        } 
        fetchData()
        
    }

    if (data) {
        console.log('data is', data.userViewer.triedRecipes)
        data.userViewer.triedRecipes.forEach(tried => (
            getTitles(tried.link)
        ))
    }

    const getRecipe = u => {
        const fetchData = async () => {
          try {
            const res = await fetch(u)
            const recipeData = await res.json()
    
            if (recipeData.status !== 'failure') {
              history.push(`/recipe/${recipeData.id}`)
            } else {
                console.log("no")
            }
          } catch (err) {
            return 'error'
          }
        }
        fetchData()
      }

    return (
        <>
            <PageContainer>
                <Container>
                    <Title>HISTORY</Title>

                    {loading ? "Loading ... " : ""}
                    
                    {console.log(recipeTitles, typeof(recipeTitles))}
                    
                    <Table>
                        <TRHeader>
                            <THDate>Date</THDate>
                            <THLink>Recipe</THLink>
                            <THLink>Link</THLink>
                        </TRHeader>

                        {!data ? "You need to log in!" : data.userViewer.triedRecipes.map(tried => (
                            <>
                                <Tr>
                                    <TDDate>{tried.createdAt}</TDDate>
                                    <TDLink><button onClick={() => getRecipe(tried.link)} >Go To Recipe</button></TDLink>
                                    <TDLink><a href={tried.link}>{tried.link}</a></TDLink>
                                </Tr>
                            </>
                        ))}

                    </Table>

                </Container>
            </PageContainer>
        </>
    )
}

export default History