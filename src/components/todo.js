import React, { useState, useEffect } from "react";
import Container from "./container";
import styled from "styled-components";
import GameHeading from "./game-heading";

const StyledWrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const StyledToDo = styled.form`
    

`;

const StyledTr = styled.tr`
    
`;

const StyledTd = styled.td`
    
`;

const StyledTbody = styled.tbody`
    display: flex;
    flex-wrap: wrap;
`;

const Todo = () => {
    const [posts, setPosts] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        author: ''
    });
    useEffect(() => {
        fetchPosts();
    }, [])
    const fetchPosts = async () => {
        const response = await fetch('http://randomuser.me')
        const json = await response.json()
        setPosts(json);
    }
    // const addPost = async (title, author) => {
    //     await fetch('http://localhost:3000/posts', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ title, author })
    //     });
    //     fetchPosts();
    // }
    const handleChange = name => event => setFormData({
        ...formData,
        [name]: event.target.value
    });
    const onAdd = (event) => {
        event.preventDefault();
        const { title, author } = formData;
        addPost(title, author);
        setFormData({ title: '', author: '' })
    }
    const onDelete = async (id) => {
        await fetch('http://localhost:3000/posts/' + id, {
            method: 'DELETE'
        });
        fetchPosts();
    }
    return (
        <Container>
            <GameHeading>Lista rzeczy do zrobienia</GameHeading>
            <StyledWrapper>
                <StyledToDo onSubmit={ onAdd }>
                    <label>
                        Co jest do zrobienia?
                    <input value={ formData.title } onChange={ handleChange('title') } type="text" required />
                    </label>
                    <label>
                        Kto ma to zrobić?
                    <input value={ formData.author } onChange={ handleChange('author') } type="text" required />
                    </label>
                    <button type="submit">Dodaj</button>
                </StyledToDo>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Co masz do zrobienia? </th>
                            <th>Kto ma to zrobić?</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { posts.map(({ id, title, author }) => (
                            <tr>
                                <StyledTd>{ id }</StyledTd>
                                <StyledTd>{ title }</StyledTd>
                                <td>{ author }</td>
                                <td>
                                    <button onClick={ () => onDelete(id) }>Usuń</button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </StyledWrapper>

        </Container>
    );
}
export default Todo;