import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const BookDetail = () => {
    const params = useParams();
    const id = params.id;
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get("/databases/books.json");
            setBooks(response.data);
        };
        fetchBooks();
    }, []);

    const book = books.find((b) => b.id === parseInt(id))

    const [likes, setLikes] = useState(0);
    const updateLikes = () => {
        setLikes(likes => likes + 1);
    };

    useEffect(() => {
        setLikes(0);
    }, [id])

    // 비동기 방식으로 인해서 처음 불러올 때 (즉 데이터 불러오기 전 상황에 대한 예외처리가 없으면 오류가 발생한다!)
    if(!book){
        return <div>찾는 책이 없습니다.</div>
    }

    return (
        <div>
            <h1>{book.title}</h1>
            <h3>{book.author}</h3>
            <p>{book.description}</p>
            <Button onClick={updateLikes}>
                <Icon>❤️</Icon> {likes}
            </Button>
        </div>
    );
};

export default BookDetail;

const Button = styled.button`
  background-color: #75b5f5;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  padding: 5px 15px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9ecfff;
  }

  &:active {
    background-color: #3d9dfd;
  }
`;

const Icon = styled.span`
  margin-right: 8px;
  font-size: 20px;
`;
