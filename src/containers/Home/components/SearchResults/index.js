import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { ListContainer, List, ListItem } from './styles'
import GET_RESTRICTIONS from './graphql'

const API_KEY = '5dc246545b634cc48af9fb7a2a5e609a'
const APP_ID = 'f1500858'
const APP_KEY = '090812a8cbcf00e2831e04f48c0fa243'

const SearchResults = ({ url, ingredients }) => {
  const { loading, error: restrictionsError, data: restrictionsData } = useQuery(GET_RESTRICTIONS)

  const history = useHistory()
  const [results, setResults] = useState([])
  const [error, setError] = useState(false)

  const filter = ({ hits }) => {
    const filtered = []
    hits.forEach(({ recipe }) => {
      let ingJoined = ''
      recipe.ingredients.forEach(({ text }) => { ingJoined += text })
      if (ingredients.every(ingredient => ingJoined.includes(ingredient))) {
        filtered.push(recipe)
      }
    })
    setResults(filtered)
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${url}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await res.json()
      filter(data)
    }
    fetchData()
  }, [url])

  useEffect(() => {
    setError(false)
  }, [results])

  const getRecipe = u => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.spoonacular.com/recipes/extract?url=${u}&apiKey=${API_KEY}`)
        const data = await res.json()

        if (data.status !== 'failure') {
          history.push(`/recipe/${data.id}`)
        } else {
          setError(true)
        }
      } catch (err) {
        return 'error'
      }
    }
    fetchData()
  }

  if (loading) return <p>Loading...</p>

  if (error || restrictionsError) {
    return (
      <>
        <h1>THIS IS AN ERROR PAGE</h1>
        <p>Unfortunately, because we are referencing multiple APIs, some recipes that may show up on the search results do not have recipe details available.</p>
      </>
    )
  }

  return (
    <>
      <ListContainer>
        <List>
          {console.log(restrictionsData)}
          {results.map(({ label, url: u, uri }) => (
            <ListItem key={uri} onClick={() => getRecipe(u)}>{label}</ListItem>
          ))}
        </List>
      </ListContainer>
    </>
  )
}

export default SearchResults
