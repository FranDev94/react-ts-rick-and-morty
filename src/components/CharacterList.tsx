import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"

import Character from "./Character"
import  NavPage  from "./NavPage"

export default function CharacterList() {
    const [characters, setCharacters] = useState<ICharacter[]>([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
        setLoading(true)
        const fetchCharacters = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character' + '?page=' + page)
                const data = await response.json() as { results: ICharacter[] }
                setCharacters(data.results)
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
        fetchCharacters()
    }, [page])

    return <>
        <header>
            <NavPage {...{ page, setPage }} />
        </header>
        {loading
            ? <h1>Loading...</h1>
            : <Container>
                <Row>
                    {characters.map(character => (
                        <Col key={character.id}>
                            <Character {...character} />
                        </Col>
                    ))}
                </Row>
            </Container>}
        <footer>
            <NavPage {...{ page, setPage }} />
        </footer>
    </>
}

