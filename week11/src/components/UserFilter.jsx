import { useState } from 'react'
import styled from 'styled-components'
import { filterType } from '../constants/filterType'
import { getGenderUser, getPartUser, getPerPage } from '../apis/userlist'

const UserFilter = ({setFilter, setUserData, setCurPage}) => {
  // 필수 과제 2
  const [clicked, setClicked] = useState(null);
  // 필수 과제 3

  const handleClick = async(type, param) => {
    if(type === "all"){
      const response = await getPerPage(1);
      console.log(response);
      setUserData(response);
      setCurPage(1);
    }
    else if (type === "gender"){
      const response = await getGenderUser(param);
      console.log(response);
      setUserData(response);
      setCurPage(1);
    }
    // 필수과제1
    else if (type === "part"){
      const response = await getPartUser(param);
      console.log(response);
      setUserData(response);
      setCurPage(1);
    }
    setFilter(param);
    setClicked(param);
  }

  return (
    <FilterLayout>
      {filterType.map((data, idx) => 
        <FilterBox key={idx} onClick={() => handleClick(data.type, data.param)} $clicked={clicked === data.param}> {/* 필수과제 2 */}
          {data.title}
        </FilterBox>
      )}
    </FilterLayout>
)}

export default UserFilter

const FilterLayout = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    overflow-x: scroll;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 2rem;
    gap: 2rem;
    &::-webkit-scrollbar{
        display: none;
    }
`

const FilterBox = styled.div`
    display: flex;
    padding: 1rem 4rem 1rem 4rem;
    background-color: "#C9C9C9";
    border-radius: 1rem;
    font-size: 3rem;
    white-space: nowrap;

    // 필수과제 2
    color: ${(props) => props.$clicked ? "blue" : "#C9C9C9"};
    &:hover{
        cursor: pointer;
        color: blue;
    }
`