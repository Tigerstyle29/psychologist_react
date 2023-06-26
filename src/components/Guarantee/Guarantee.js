import Zagolovok from '@components/Guarantee/Zagolovok/Zag'
import Elements from '@components/Guarantee/Elements/Elements'

import styled from 'styled-components'

const Guarantee = () => {
    return (
        <Background>
            <Zagolovok />
            <Elements /> 
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F5F2FC;
`

export default Guarantee

