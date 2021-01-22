import React, { useState } from 'react'
import IconContainer from './styles'
import { ADD_TRIED, ADD_BOOKMARK, DEL_BOOKMARK, DEL_TRIED } from './graphql'
import { useMutation } from '@apollo/react-hooks'

export const Bookmark = ({id, link}) => {
  const [bookmarked, setBookmarked] = useState(false)
  const [addBookmark, {error: addBookmarkError, loading: addBookmarkLoading}] = useMutation(ADD_BOOKMARK, {
    variables: {
      input: {
        apiID: id,
        link: link,
      }
    },
    onCompleted: () => {
      console.log('bookmarked!')
    },
    onError: (error) => {
      console.log(error.message, "error message end")
    }
  })

  const [delBookmark, {error: delBookmarkError, loading: delBookmarkLoading}] = useMutation(DEL_BOOKMARK, {
    variables: {
      input: {
        apiID: id,
        link: link,
      }
    },
    onCompleted: () => {
      console.log('un-bookmarked!')
    },
    onError: (error) => {
      console.log(error.message, "error message end")
    }
  })
  
  const handleClick = (event) => {
    event.preventDefault()
    if (!bookmarked) {
      setBookmarked(!bookmarked)
      addBookmark()
    } else {
      setBookmarked(!bookmarked)
      delBookmark()
    }
  }

  return (
    <IconContainer>
      <a onClick={ handleClick } >
        {bookmarked ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
          </svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
        </svg>}
      </a>
    </IconContainer>
  )}



export const Check = ({id, link}) => {
  const [tried, setTried] = useState(false)

  const [addTried, {error: addTriedError, loading: addTriedLoading}] = useMutation(ADD_TRIED, {
    variables: {
      input: {
        apiID: id,
        link: link,
      }
    },
    onCompleted: () => {
      console.log('added tried!')
    },
    onError: (error) => {
      console.log(error.message, "error message end")
    }
  })

  const [delTried, {error: delTriedError, loading: delTriedLoading}] = useMutation(DEL_TRIED, {
    variables: {
      input: {
        apiID: id,
        link: link,
      }
    },
    onCompleted: () => {
      console.log('deleted tried!')
    },
    onError: (error) => {
      console.log(error.message, "error message end")
    }
  })

  const handleClick = (event) => {
    event.preventDefault()
    if (tried) {
      setTried(!tried)
      delTried()
    } else {
      setTried(!tried)
      addTried()
    }
  }

  return (
    <IconContainer>
      <a onClick={ handleClick } >
        {tried ?
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
        </svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
        </svg>}
      </a>
    </IconContainer>
  )}
