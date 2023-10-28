import React from "react"
import styled from 'styled-components'

// // props = {img, alt, text}
// // через деструктуризацию
// // тоже самое что и 3 вариант
// function HelpCard.js({img, alt, text}) {
//     return (
//         <Wrapper>
//             <Img
//                 src={img}
//                 alt={alt} 
//             />
//             <Text>
//                 {text}
//             </Text>
//         </Wrapper>
//     )
// }

// // 2 вариант написания:
// function HelpCard.js(props) {
//     return (
//         <Wrapper>
//             <Img
//                 src={props.img}
//                 alt={props.alt} 
//             />
//             <Text>
//                 {props.text}
//             </Text>
//         </Wrapper>
//     )
// }

// // 3 вариант написания:
// // через деструктуризацию
function Card(props) {
    const {img, alt, text} = props
    return (
        <Wrapper>
            <Img
                src={img}
                alt={alt} 
            />
            <Text>
                {text}
            </Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;	
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    width: 150px;
    height: 150px;
`
const Text = styled.p`
    text-align: center;
    max-width: 170px;
`

export default Card