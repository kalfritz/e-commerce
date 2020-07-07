import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: white;
  padding: 30px;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      border: 0;
      overflow: hidden;
      color: #fff;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;
export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: '#999';
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 0 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    height: 100px;
  }
  strong {
    color: #333;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    font-weight: bold;
    color: #999;
    margin-right: 5px;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
