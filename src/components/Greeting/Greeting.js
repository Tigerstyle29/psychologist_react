// components
import Text from './Text'
import Picture from './Picture'
// styles
import styled from 'styled-components'

const Greeting = () => {
    return (
        <Wrapper>
            <Text />
            <Picture />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export default Greeting 