import { Component } from "react";
import styled from "styled-components";
const FormDiv = styled.div`
  display: flex;
//   align-item: center;
  justify-content: space-between;
  background-color: #edeef0;
  border-radius: 30px;
  padding-left: 20px;
  margin:bottom:25px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 10px;
  font-size: 17px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 17px 35px;
  background-color: #3457d5;
  color: #fff;
  font-size: 16px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translate(5px);
  }
`;
export class Form extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleClick = () => {
    this.props.onAdd(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <FormDiv>
        <Input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Add your task"
        ></Input>
        <Button onClick={this.handleClick}>Add</Button>
      </FormDiv>
    );
  }
}
