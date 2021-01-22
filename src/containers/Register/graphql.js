import gql from 'graphql-tag'

// register(input: RegisterInput!): AuthReturn!
export const REGISTER = gql`
mutation register($input:RegisterInput!){
    register(input:$input){
        token
        user {
            id
            email
            password
            createdAt
            updatedAt
        }
    }
}
`
// addDiet(input: DietInput!):Diet!
export const ADD_DIET = gql`
    mutation addDiet($input:DietInput!){
        addDiet(input:$input){
            id
            restriction
        }
    }
`

// addHealth(input: HealthInput!):Health!
export const ADD_HEALTH = gql`
    mutation addHealth($input:HealthInput!){
        addHealth(input:$input){
            id
            restriction
        }
    }
`
