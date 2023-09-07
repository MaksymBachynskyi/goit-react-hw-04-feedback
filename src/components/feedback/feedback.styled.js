import styled from 'styled-components';

export const StyledBtn = styled.button`
  width: 100px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: blue;
    color: white;
  }
`;
export const WraperBtns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
