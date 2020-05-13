import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    padding: 50px 80px;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 60vw;
    height: 70vh;
    background-color: #fff;
    box-shadow: 0 20px 40px -10px rgba(#818181, .5);
    position: fixed;
`;

const Modal = () => (
    <StyledWrapper>
        <p>Gracz pierwszy wygrywa :*</p>
    </StyledWrapper>
);


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



{/* <PoseGroup> */}
            //     { isModalOpen && [
            //         <StyledShade
            //             onClick={ () => setState(null) }
            //             key="shade"
            //             className="shade" />,
            //         <StyledModal key="modal" className="modal">
            //             { setState }
            //         </StyledModal>
            //     ] }
            // </PoseGroup>

export default Modal;