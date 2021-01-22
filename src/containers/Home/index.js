import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  PageContainer,
  Container,
  SubContainer,
  AddContainer,
  ResultContainer,
  DescContainer
} from './styles'
import SearchResults from './components/SearchResults'
import {
  SearchBar,
  IngredientAdder,
  IngredientList,
} from './components/Search'
import { useQuery } from '@apollo/react-hooks'
import GET_RESTRICTIONS from './graphql'

const Home = () => {
  const history = useHistory()
  const { loading, error: restrictionsError, data: restrictionsData } = useQuery(GET_RESTRICTIONS)

  const [query, setQuery] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [url, setUrl] = useState('')

  if (!localStorage.getItem('token')) {
    console.log("nope", localStorage.getItem('token'))
    history.push('/login')
  }

  if (loading) return <p>Loading...</p>

  if (restrictionsError) {
    return <p>{restrictionsError}</p>
  }

  const addIngredient = i => {
    setIngredients([...ingredients, i])
  }

  const processSubmit = () => {
    let link = 'https://api.edamam.com/search?'
    if (query) {
      link += `q=${query}`
    }

    const { userViewer: { diets, healths } } = restrictionsData
    if (diets.length > 0) {
      link += `&diet=${diets[0].restriction}`
    }
    healths.forEach(health => {
      link += `&health=${health.restriction}`
    })

    console.log(link)

    setUrl(link)
  }

  return (
    <>
      <PageContainer>
        {console.log(restrictionsData)}
        <Container>
          <SearchBar setQuery={setQuery} />
          <SubContainer>
            <AddContainer>
              <IngredientAdder addIngredient={addIngredient} />
              <IngredientList ingredients={ingredients} />
            </AddContainer>
            <DescContainer>
              <p>Recipe Central allows users to search for recipes compatible with their dietary needs by entering the recipe title or related keywords, as well as necessary ingredients (optional). To conduct a search, enter recipe keywords and, if preferred, add ingredients before clicking submit.</p>
              <button onClick={processSubmit}>Submit</button>
            </DescContainer>
          </SubContainer>
          <ResultContainer>
            <SearchResults url={url} ingredients={ingredients} />
          </ResultContainer>
        </Container>
      </PageContainer>
    </>
  )
}

export default Home
