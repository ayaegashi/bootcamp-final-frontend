import gql from 'graphql-tag'

// addTriedRecipe(input: TriedRecipeInput!):TriedRecipe!
export const ADD_TRIED = gql`
    mutation addTriedRecipe($input:TriedRecipeInput!){
        addTriedRecipe(input:$input){
            id
            link
        }
    }
`

// delTriedRecipe(input: TriedRecipeInput!):[TriedRecipe!]!
export const DEL_TRIED = gql`
    mutation delTriedRecipe($input:TriedRecipeInput!){
        delTriedRecipe(input:$input){
            link
        }
    }
`

// addBookmark(input: BookmarkInput!): Bookmark!
export const ADD_BOOKMARK = gql`
    mutation addBookmark($input:BookmarkInput!){
        addBookmark(input:$input){
            id
            link
        }
    }
`

// delBookmark(input: BookmarkInput!): [Bookmark!]!
export const DEL_BOOKMARK = gql`
    mutation delBookmark($input:BookmarkInput!){
        delBookmark(input:$input){
            link
        }
    }
`