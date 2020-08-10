import React from 'react';
import Container from '../container';
import Heading from '../Heading';
import MemoryGame from '../memory-game';
import TicTacToeGame from '../tic-tac-toe-game';

const Gallery = ({ target }) => (
    <Container>
        <Heading>Gallery</Heading>
        <MemoryGame />
        <TicTacToeGame />
    </Container>
);
export default Gallery;