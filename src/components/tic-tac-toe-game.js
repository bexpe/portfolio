import React, { useState, useEffect } from 'react';
// import posed, { PoseGroup } from 'react-pose';
import styled from "styled-components"
import Container from "./container"
import GameHeading from './game-heading';
// import Modal from '../components/modal/modal';

const StyledWrapper = styled.div`
    margin: 0 auto;
    max-width: 80%;
`;

const StyledRow = styled.div`
    display: flex;
`
const StyledField = styled.button`
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 14vw;
    flex: 1;
    background-color: #e1e1e1;
    border: 1px solid #000;
    outline: none;
    transition: background-color 0.2s ease;
    &[data-value="0"]:hover {
        background-color: #E3D7A5;
        cursor:pointer;
    }
    &[data-value="1"]::before {
        content: "O";
    }
    &[data-value="2"]::before {
        content: "X";
    }    
    &::before {
        color: #3b3b3b;
        font-size: 10vw;
    }

    @media (orientation: portrait) {
        height: 20vw;
    }
`;
// const StyledLabel = styled.label` 
//     input {
//         background-color: red;
//         /* display: none; */
//     }
//     span {
//         &::before{
//             content: "mój customowy";
//         }
//     }
//     input:checked + span {
//         color: red;
//         &::before{
//             content: "mój customowy checkbox";
//         }
//     }
// `;

const initialArea = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

// const Modal = posed.div({
//     enter: {
//         y: 0,
//         opacity: 1,
//         delay: 300,
//         transition: {
//             y: { type: 'spring', stiffness: 1000, damping: 15 },
//             default: { duration: 300 }
//         }
//     },
//     exit: {
//         y: 50,
//         opacity: 0,
//         transition: { duration: 150 }
//     }
// });

// const StyledModal = styled(Modal)`
//     position: fixed;
//     width: 500px;
//     height: 300px;
//     top: 100px;
//     left: 50%;
//     transform: translateX(-50%) !important;
//     background: white;
//     border-radius: 10px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 70px;
//     text-align: center;

// `

// const Shade = posed.div({
//     enter: { opacity: 1 },
//     exit: { opacity: 0 }
// });

// const StyledShade = styled(Shade)`
//     position: fixed;
//   background: rgba(0, 0, 0, 0.8);
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
// `


const TicTacToeGame = () => {
    const [area, setArea] = useState(initialArea);
    const [player, setPlayer] = useState(1);
    const [moves, setMoves] = useState(0);
    // const [isModalOpen, setModalText] = useState(null);

    const getValue = (y, x) => area[y][x];

    const onClick = (y, x) => {
        if (getValue(y, x) !== 0) {
            return;
        }
        const newArea = [...area];
        newArea[y][x] = player;
        setArea(newArea);
        setPlayer(player === 1 ? 2 : 1);
        setMoves(moves + 1);
    }
    const checkIfPlayerWin = player =>
        (area[0][0] === player && area[0][1] === player && area[0][2] === player) ||
        (area[1][0] === player && area[1][1] === player && area[1][2] === player) ||
        (area[2][0] === player && area[2][1] === player && area[2][2] === player) ||
        (area[0][0] === player && area[1][0] === player && area[2][0] === player) ||
        (area[0][1] === player && area[1][1] === player && area[2][1] === player) ||
        (area[0][2] === player && area[1][2] === player && area[2][2] === player) ||
        (area[0][0] === player && area[1][1] === player && area[2][2] === player) ||
        (area[0][2] === player && area[1][1] === player && area[2][0] === player);
    const clearArea = () => setArea([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]);
    useEffect(() => {
        if (checkIfPlayerWin(1)) {
            alert('Gracz pierwszy wygrywa!');
            clearArea();
            setMoves(0);
        }
        if (checkIfPlayerWin(2)) {
            alert('Gracz drugi wygrywa!');
            clearArea();
            setMoves(0);
        }
    }, [area]);
    useEffect(() => {
        if (moves === 9) {
            alert('Remis');
            clearArea();
            setMoves(0);
        }
    }, [moves])
    return (
        <Container>
            <GameHeading>tic-tac-toe game</GameHeading>
            {/* <PoseGroup>
                { modalText && [
                    <StyledShade
                        onClick={ () => setModalText(null) }
                        key="shade"
                        className="shade" />,
                    <StyledModal key="modal" className="modal">
                        { modalText }
                    </StyledModal>
                ] }
            </PoseGroup> */}

            <StyledWrapper>
                { area.map((row, yIndex) => (
                    <StyledRow>
                        { row.map((field, xIndex) => (
                            <StyledField
                                data-value={ getValue(yIndex, xIndex) }
                                onClick={ () => onClick(yIndex, xIndex) }
                            />
                        )) }
                    </StyledRow>
                )) }
            </StyledWrapper>
        </Container>
    );
}

export default TicTacToeGame;
