import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    display: flex;
    align-items: center;
    padding: 0 1.5 em;
`;

const LeftSection = styled.div`
    display: flex;
`;

const MiddleSection = styled.div`
    display: flex;
    flex: 2;
`;

const RightSection = styled.div`
    display: flex;
`;

export function NavBar(props) {
    return <NavBarContainer>
            <LeftSection></LeftSection>
            <MiddleSection></MiddleSection>
            <RightSection></RightSection>
    </NavBarContainer>
}