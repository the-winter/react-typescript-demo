import * as React from "react";

interface ComponentProps {
  addSuggestion: any; // TODO
}

export class NewSuggestion extends React.Component<ComponentProps> {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    // call function to add a todo
    this.props.addSuggestion(this.state);
    this.setState({
      content: ""
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <button type="submit"> + </button>
        </form>
      </div>
    );
  }
}
