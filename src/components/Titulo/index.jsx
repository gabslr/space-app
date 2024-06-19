import styled from "styled-components";

const Titulo = styled.h2`
font-size: 32px;
color: rgba(123, 120, 229, 1);
text-align: ${props => props.$align ? props.$align : "left"};

`

export default Titulo