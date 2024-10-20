import styled from "styled-components";
import { Form } from "./Form";
import { List } from "./List";
const Background = styled.div`
  background-color: #00308f;
  width: 100%;
  min-height: 100vh;
  padding: 10px;
`;
const Todo = styled.div`
  width: 550px;
  margin: 100px auto 20px;
  border-radius: 10px;
  padding: 40px 30px 70px;
  background-color: #fff;
`;
const Heading = styled.h2`
  color: #ff7f50;
  display: flex;
  align-item: center;
  margin-bottom: 20px;
  font-weight: bolder;
  font-size: 2rem;
`;
const Image = styled.img`
  width: 40px;
  margin-left: 30px;
`;
export default function TodoContainer(props) {
  return (
    <Background>
      <Todo>
        <Heading>
          Todo-List
          <Image src="https://cdn-icons-png.flaticon.com/128/7246/7246748.png"></Image>
        </Heading>
        <Form onAdd={props.onAdd} />
        <List todos={props.todos} removeText={props.removeText}></List>
      </Todo>
    </Background>
  );
}
