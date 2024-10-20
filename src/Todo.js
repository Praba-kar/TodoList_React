import styled from "styled-components";
const Li = styled.li`
  list-style: none;
  font-size: 17px;
  padding: 5px 8px 5px 20px;
  cursor: pointer;
  position: relative;
  color: black;
  display: flex;
  justify-content: space-between;
  line-height: 2;
`;
const Closebutton = styled.button`
  border: none;
  outline: none;
  height: 30px;
  width: 30px;
  background-color: orange;
  border-radius: 50%;
  margin-top: 2px;
`;

export function Todo(props) {
  const handleClick = () => {
    props.removeText(props.todo.text);
  };
  return (
    <>
      <Li>
        {props.todo.text}
        <Closebutton onClick={handleClick}>x</Closebutton>
      </Li>
    </>
  );
}
