import gql from 'graphql-tag'

// allUsers: [User!]!
export const ALL_USERS = gql`
    query allUsers{
        allUsers{
            id
            email
            password
            createdAt
            updatedAt
        }
    }
`

// dietById(id:ID!):[Diet!]!
export const DIET_BY_ID = gql`
    query dietById($id:ID!){
        dietById(id:$id){
            id
            user {
                id
                email
                password
                createdAt
                updatedAt
            }
            restriction
        }
    }
`

// healthById(id:ID!):[Health!]!
export const HEALTH_BY_ID = gql`
    query healthById($id:ID!){
        healthById(id:$id){
            id
            user {
                id
                email
                password
                createdAt
                updatedAt
            }
            restriction
        }
    }
`

// triedRecipeById(id:ID!):[TriedRecipe]!
export const TRIED_BY_ID = gql`
    query triedRecipeById($id:ID!){
        triedRecipeById(id:$id){
            id
            user {
                id
                email
                password
                createdAt
                updatedAt
            }
            link
        }
    }
`

// mealTrackerById(id: ID!):[MealTracker!]!
export const MEALS_BY_ID = gql`
    query mealTrackersById($id:ID!){
        mealTrackerById(id:$id){
            id
            tried {
                id
                user {
                    id
                    email
                    password
                    createdAt
                    updatedAt
                }
                link
            }
            date
            meal
        }
    }
`

// delTriedRecipe(input: TriedRecipeInput!):[TriedRecipe!]!
export const DEL_DIET = gql`
    mutation delTriedRecipe($input:TriedRecipeInput!){
        delTriedRecipe(input:$input){
            user {
                id
                email
                password
                createdAt
                updatedAt
            }
            link
        }
    }
`




// addMealTracker(input: MealTrackerInput!): MealTracker!
export const ADD_MEAL = gql`
    mutation addMealTracker($input:MealTrackerInput!){
        addMealTracker(input:$input){
            id
            tried {
                id
                user {
                    id
                    email
                    password
                    createdAt
                    updatedAt
                }
                link
            }
            date
            meal
        }
    }
`