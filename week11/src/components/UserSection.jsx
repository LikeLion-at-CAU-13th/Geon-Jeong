import PageSelection from './PageSelection'
import PaginationDummy from './PaginationDummy';
import UserCard from './UserCard'
import styled from 'styled-components'


const UserSection = ({filter, userData, curPage, setUserData, setCurPage}) => {

  const perPage = 5;
  const offset = (curPage - 1) * perPage;

  // 전체일 때는 서버에서 이미 분리된 데이터를 받아옴
  // 필터 상태일 땐 프론트에서 offset을 기준으로 slice
  const displayedData = filter === "all" ? userData : userData.slice(offset, offset + perPage);


  return (
    <UserSecLayout>
      <UserCardBox>
            {displayedData.map( (data, idx) => <UserCard key={idx} data = {data} />)}
      </UserCardBox>
      {/* {(filter === "all") && <PageSelection curPage={curPage} setCurPage={setCurPage} setUserData={setUserData}/>} */}
      {filter === "all" ? (
        <PageSelection curPage={curPage} setCurPage={setCurPage} setUserData={setUserData} filter={filter} />
      ) : (
        <PaginationDummy curPage={curPage} setCurPage={setCurPage} userData={userData} perPage={perPage} />
      )}
    </UserSecLayout>
  )
}

export default UserSection

const UserSecLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const UserCardBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`