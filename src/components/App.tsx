import * as React from "react";
import "./../assets/scss/App.scss";
import { Header } from "./header/header";
import { Sidebar } from "./sidebar/sidebar";
import { Content } from "./content/content";
import { Aside } from "./sidebar/aside";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {}

export default class App extends React.Component<AppProps, undefined> {
  constructor(props) {
    super(props);

    this.state = {
      englishFlag: true,
      english: "now its true",
      serbian: "cao cao tamo i vamo"
    };
  }

  changeLanguage() {
    const { englishFlag, english, serbian } = this.state;

    if (englishFlag == true) {
      this.setState({ englishFlag: false });
      this.setState({ english: "now its false" });
    } else {
      this.setState({ englishFlag: true });
      this.setState({ english: "now its true" });
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
