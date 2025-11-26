import styled from 'styled-components';
import { type SortOption } from '../types/movie.types';

interface SortButtonsProps {
  currentSort: SortOption;
  onSortChange: (sortOption: SortOption) => void;
}

const SortButtons = ({ currentSort, onSortChange }: SortButtonsProps) => {
  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'rating', label: '평점순' },
    { value: 'release_date', label: '개봉일순' },
  ];

  return (
    <ButtonLayout>
      {sortOptions.map(option => (
        <ButtonDetail
          key={option.value}
          $isActive={currentSort === option.value}
          onClick={() => onSortChange(option.value)}
        >
          {option.label}
        </ButtonDetail>
      ))}
    </ButtonLayout>
  );
};

export default SortButtons;

const ButtonLayout = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 20px;
`;

const ButtonDetail = styled.button<{ $isActive: boolean }>`
  padding: 10px 20px;
  border: 2px solid white;
  background: ${props => props.$isActive ? 'white' : 'transparent'};
  color: ${props => props.$isActive ? '#667eea' : 'white'};
  font-size: 16px;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: white;
    color: #667eea;
  }
`;