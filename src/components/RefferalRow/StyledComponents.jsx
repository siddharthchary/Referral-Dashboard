import styled from 'styled-components';

// Row container layout with visual hover animations
export const TableRow = styled.tr`
  border-bottom: 1px solid #f8fafc;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #fcfdfe;
  }
`;

// Standard cell structure for Name, Service, and Date properties
export const TableCell = styled.td`
  padding: 16px 24px;
  font-size: 14px;
  white-space: nowrap;
  
  /* Dynamic font weights using component boolean props */
  color: ${props => (props.fontMedium ? '#1e293b' : '#64748b')};
  font-weight: ${props => (props.fontMedium ? '500' : '400')};
`;

// Unique highlighted color cell for the Profit pricing column string
export const ProfitCell = styled.td`
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #4f46e5;
  white-space: nowrap;
`;
