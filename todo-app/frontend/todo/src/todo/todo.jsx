import React, { Component } from "react";
import axios from "axios";

import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const api = "http://localhost:3307/api/todos";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      list: []
    };
    // O this sempre será a classe Todo
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.refresh();
  }

  refresh(description = "") {
    const search = description ? `&description__regex=/${description}/` : "";
    axios.get(`${api}?sort=-CreatedAt${search}`).then(resp =>
      this.setState({
        ...this.state,
        description,
        list: resp.data
      })
    );
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(api, { description }).then(resp => this.refresh());
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      description: e.target.value
    });
  }

  handleRemove(todo) {
    axios
      .delete(`${api}/${todo._id}`)
      .then(resp => this.refresh(this.state.description));
  }

  handleMarkAsDone(todo) {
    axios
      .put(`${api}/${todo._id}`, { ...todo, done: true })
      .then(resp => this.refresh(this.state.description));
  }

  handleMarkAsPending(todo) {
    axios
      .put(`${api}/${todo._id}`, { ...todo, done: false })
      .then(resp => this.refresh(this.state.description));
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleClear() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
        <TodoForm
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          description={this.state.description}
          handleClear={this.handleClear}
        />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    );
  }
}
