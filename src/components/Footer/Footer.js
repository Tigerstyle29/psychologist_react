import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; {new Date().getFullYear()} Психолог Игорь Антипов. Все права защищены.</p>
            <p>
                <StyledLink href="#">Политика конфиденциальности</StyledLink> |{' '}
                <StyledLink href="#">Условия использования</StyledLink>
            </p>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    background-color: #6C5D95;
    color: #fff;
    padding: 20px;
    text-align: center;

    @media (max-width: 768px) {
        padding: 10px;
    }
`
const StyledLink = styled.a`
    color: #fff;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export default Footer