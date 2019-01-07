import * as React from "react";
import { NewSuggestion } from "./add-suggestion";

interface ComponentProps {
}

export class Aside extends React.Component<ComponentProps> {
  constructor(props) {
    super(props);
  }

  state = {
    suggestions: [{ id: 1, content: "moar things!" }]
  };

  addSuggestion = (suggestion: any) => {
    suggestion.id = Math.random();
    let suggestions = [...this.state.suggestions, suggestion ];
    this.setState({suggestions: suggestions});
    console.log("state: ", this.state.suggestions);
  }

  deleteSuggestion = id => {
    const suggestions = this.state.suggestions.filter(suggestion => {
      console.log("id: ", suggestion.id);
      return suggestion.id !== id;
    });

    this.setState({
      suggestions: suggestions
    });
  }

  render() {
    const todoList = this.state.suggestions.length ? (
      this.state.suggestions.map(suggestion => {
        console.log("todo", suggestion);
        return (
          <div className="suggestion-row" key={suggestion.id}>
            <span>{suggestion.content}</span>
            <button
              onClick={() => {
                this.deleteSuggestion(suggestion.id);
              }}
            >
              X
            </button>
          </div>
        );
      })
    ) : (
      <p>You have no suggestions, yay!</p>
    );

    return (
      <div className="aside">
        <p>Can you think of ways to make this website even more awesome? Please enter some suggestions below:</p>

        <div className="suggestion-container">
          <div className="suggestion-collection">{todoList}</div>
          <NewSuggestion addSuggestion={this.addSuggestion} />
        </div>
      </div>
    );
  }
}
