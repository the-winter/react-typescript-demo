import * as React from "react";
import "./../assets/scss/App.scss";
import { Header } from "./header/header";
import { Sidebar } from "./sidebar/sidebar";
import { Content } from "./content/content";
import { Aside } from "./aside/aside";

const reactLogo = require("./../assets/img/react_logo.svg");

interface AppProps {
  englishFlag: boolean;
  english: string;
}

export default class App extends React.Component<AppProps> {
  constructor(props) {
    super(props);
  }
  state = {
    englishFlag: true,
    english: "future technology example 1",
  };

  changeLanguage() {
    const { englishFlag } = this.state;

    if (englishFlag === true) {
      this.setState({ englishFlag: false });
      this.setState({ english: "future technology example 2" });
    } else {
      this.setState({ englishFlag: true });
      this.setState({ english: "future technology example 1" });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="holygrail-body">
          <Content
            english={this.state.english}
            changeLanguage={this.changeLanguage.bind(this)}
          />
          <Sidebar />
          <Aside />
        </div>
      </div>
    );
  }
}
