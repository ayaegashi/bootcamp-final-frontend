import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Ingredients from './components/Ingredients'
import Steps from './components/Steps'
import { Bookmark, Check } from './components/Icons'
import {
  Title,
  Button,
  ButtonPanel,
  LeftPanel,
  IngredientsContainer,
  StepsContainer,
  PageContainer,
} from './styles'

const API_KEY = '8f354abf8b1c4217b1c1289b157ec811'

const Recipe = () => {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [steps, setSteps] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
        const data = await res.json()

        if (data.status !== 'failure') {
          setTitle(data.title)
          setIngredients(data.extendedIngredients)
          setSteps(data.analyzedInstructions[0].steps)
        } else {
          setError(true)
        }
      } catch (err) {
        return 'error'
      }
    }
    fetchData()
  }, [])

  if (error) {
    return (
      <>
        <h1>THIS IS AN ERROR PAGE</h1>
        <p>Unfortunately, because we are referencing multiple APIs, some recipes that may show up on the search results do not have recipe details available.</p>
      </>
    )
  }

  return (
    <>
      <PageContainer>
        <LeftPanel>
          <Title>{title}</Title>
          <ButtonPanel>
            <Bookmark id={ id } link={`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`} />
            {console.log(id)}
            <Check id={ id } link={`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`} />
          </ButtonPanel>
          <IngredientsContainer>
            <Ingredients ingredients={ingredients} />
          </IngredientsContainer>
        </LeftPanel>
        <StepsContainer>
          <Steps steps={steps} />
        </StepsContainer>
      </PageContainer>
    </>
  )
}

export default Recipe
