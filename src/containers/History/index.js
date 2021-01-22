import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { USER_VIEWER } from './graphql'
import { PageContainer, Container, Title, THDate, THLink, TDDate, TDLink, Table, Tr, TRHeader } from './styles'

const History = () => {
    const { data, loading, error } = useQuery(USER_VIEWER)
    if (error){
        console.log(error)
    }

    return (
        <>
            <PageContainer>
                <Container>
                
                    <Title>HISTORY</Title>

                    {loading ? "Loading ... " : ""}
                    

                    {console.log(data)}
                    <Table>
                        <TRHeader>
                            <THDate>Date</THDate>
                            <THLink>Link</THLink>
                        </TRHeader>

                        {!data ? "You need to log in!" : data.userViewer.triedRecipes.map(tried => (
                            <>
                                <Tr>
                                    <TDDate>{tried.createdAt}</TDDate>
                                    <TDLink><a href={tried.link}>{tried.link}</a></TDLink>
                                </Tr>
                            </>
                        ))}

                    </Table>

                </Container>
            </PageContainer>
        </>
    )
}

export default History