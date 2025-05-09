import React from 'react';

const Introduction = ({name, hobby, favoriteSports}) => {
    return (
        <div>
            <div>이름 : {name}입니다.</div>
            <div>취미 : {hobby}입니다.</div>
            <div>제가 좋아하는 스포츠 : {favoriteSports}</div>
            <div>전공 : 전자전기공학부</div>
            <div>좋아하는 야구팀 : Kia</div>
        </div>
    );
};

export default Introduction;