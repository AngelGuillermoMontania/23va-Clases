import React from 'react'

export default function Buttons() {

  const Button = styled.button<{ $primary }>`
    /* Adapt the colors based on primary prop */
    background: ${props => props.$primary ? "#BF4F74" : "white"};
    color: ${props => props.$primary ? "white" : "#BF4F74"};
  
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
  `;

  return (
    <div>
      <Button>Normal</Button>
      <Button $primary={true}>Primary</Button>
    </div>
  )
}