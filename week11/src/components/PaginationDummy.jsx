import styled from 'styled-components';

const PaginationDummy = ({ curPage, setCurPage, userData, perPage }) => {
  const totalPages = Math.ceil(userData.length / perPage);

  return (
    <SelectionLayout>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((val) => (
        <PageBox
          key={val}
          $active={val === curPage}
          onClick={() => setCurPage(val)}
        >
          {val}
        </PageBox>
      ))}
    </SelectionLayout>
  );
};

export default PaginationDummy;

const SelectionLayout = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;
`;

const PageBox = styled.div`
  font-size: 2rem;
  color: ${(props) => (props.$active ? '#000000' : '#C9C9C9')};
  &:hover {
    cursor: pointer;
    color: #C9C9C9;
  }
`;
