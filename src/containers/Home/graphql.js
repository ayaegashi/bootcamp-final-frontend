import gql from 'graphql-tag'

const GET_RESTRICTIONS = gql`
  query userViewer {
    userViewer {
      diets {
        restriction
      }
      healths {
        restriction
      }
    }
  }
`

export default GET_RESTRICTIONS
