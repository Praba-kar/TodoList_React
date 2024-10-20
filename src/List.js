import { Component } from "react";
import styled from "styled-components";
import { Todo } from "./Todo";
const ListContainer = styled.div`
  display: flex;
`;
const Ul = styled.ul`
  padding: 10px 8px;
  width: 100%;
`;

export function List(props) {
  return (
    <ListContainer>
      <Ul>
        {props.todos.map((todo, ind) => (
          <Todo key={ind} todo={todo} removeText={props.removeText} />
        ))}
        {/* <Todo todos={props.todos} /> */}
      </Ul>
    </ListContainer>
  );
}
