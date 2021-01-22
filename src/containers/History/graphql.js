import gql from 'graphql-tag'

// userViewer: User!
export const USER_VIEWER = gql`
    query userViewer{
        userViewer{
            id
            email
            password
            triedRecipes {
                link
                createdAt
                updatedAt
            }
            bookmarks {
                link
                createdAt
                updatedAt
            }
            diets {
                restriction
            }
            healths {
                restriction
            }
            createdAt
            updatedAt
        }
    }
`