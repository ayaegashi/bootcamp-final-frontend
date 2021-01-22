import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { USER_VIEWER } from './graphql'
import { PageContainer, Container, Title, THDate, THLink, TDDate, TDLink, Table, Tr, TRHeader } from './styles'

const Favorites = () => {
    const { data, loading, error } = useQuery(USER_VIEWER)
    if (error){
        console.log(error)
    }

    return (
        <>
            <PageContainer>
                <Container>
                
                    <Title>FAVORITES</Title>

                    {loading ? "Loading ... " : ""}
                    

                    {console.log(data)}
                    <Table>
                        <TRHeader>
                            <THDate>Date</THDate>
                            <THLink>Link</THLink>
                        </TRHeader>

                        {!data ? "You need to log in!" : data.userViewer.bookmarks.map(bookmark => (
                            <>
                                <Tr>
                                    <TDDate>{bookmark.createdAt}</TDDate>
                                    <TDLink><a href={bookmark.link}>{bookmark.link}</a></TDLink>
                                </Tr>
                            </>
                        ))}

                    </Table>

                </Container>
            </PageContainer>
        </>
    )
}

export default Favorites