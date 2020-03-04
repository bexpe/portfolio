import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import GameHeading from "./game-heading";
import Img1 from '../../assets/images/memory-game/1.jpg';
import Img2 from '../../assets/images/memory-game/2.jpg';
import Img3 from '../../assets/images/memory-game/3.jpg';
import Img4 from '../../assets/images/memory-game/4.jpg';
import Img5 from '../../assets/images/memory-game/5.jpg';
import Img6 from '../../assets/images/memory-game/6.jpg';
import Container from './container';

const imgs = [
    { key: 1, img: Img1 },
    { key: 2, img: Img2 },
    { key: 3, img: Img3 },
    { key: 4, img: Img4 },
    { key: 5, img: Img5 },
    { key: 6, img: Img6 }
];
const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;
const StyledCard = styled.div`
    width: calc( ( 100% / 3 ) - 9px);
    height: 18vh;
    background-size: cover;
    background-position: center;
    background-color: #e1e1e1;
    border: 2px solid #000;
    cursor: pointer;
    border-radius: 20px;
    margin-bottom: 3vw;

    @media (max-width: 640px) {
        margin-bottom: 1.5vw;
        border-radius: 15px;
    }

    @media (max-width: 568px) {
        width: calc( ( 100% / 3 ) - 12px);
        height: 12vh;

    }
`;
const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
const cards = shuffle([...imgs, ...imgs]);

const MemoryGame = () => {
    const [clickedCards, setClickedCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState([cards.map((card, index) => index)]);
    const [previewStage, setPreviewStage] = useState(true);
    const isClicked = index => clickedCards.indexOf(index) > -1;
    const isVisible = index => visibleCards.indexOf(index) > -1;
    const onClick = index => {
        if (!previewStage && !isClicked(index) && !isVisible(index)) {
            setClickedCards([...clickedCards, index]);
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setPreviewStage(false);
            setVisibleCards([]);
        }, 5000)
    }, [])
    useEffect(() => {
        if (clickedCards.length < 2) {
            return;
        }
        if (clickedCards.length === 3) {
            setClickedCards([clickedCards[2]]);
        }

        if (visibleCards.length === 20) {
            alert('świetna pamięć!');
        }
        const firstIndex = clickedCards[0];
        const secondIndex = clickedCards[1];
        const isSameKey =
            cards[firstIndex].key === cards[secondIndex].key;
        if (isSameKey) {
            setVisibleCards([...visibleCards, firstIndex, secondIndex])
        }
    }, [clickedCards])

    return (
        <Container>
            <GameHeading>Gra pamięciowa</GameHeading>
            <StyledWrapper>
                { cards.map((card, index) => {
                    const backgroundImage = isClicked(index) || isVisible(index) ? `url(${card.img})` : 'none';
                    return (
                        <StyledCard
                            onClick={ () => onClick(index) }
                            key={ index }
                            style={ {
                                backgroundImage,
                                borderColor: isClicked(index) ? '#eee' : '#000',
                            } }></StyledCard>
                    )
                }) }
            </StyledWrapper>
        </Container>
    );

}

export default MemoryGame;