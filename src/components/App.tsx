import * as React from "react";
import "./../assets/scss/App.scss";
import { Header } from "./header/header";
import { Sidebar } from "./sidebar/sidebar";
import { Content } from "./content/content";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {}

export default class App extends React.Component<AppProps, undefined> {
  render() {
    return (
      <div>
        <Header />
        <div className="holygrail-body">
          <Content />
          <Sidebar />
        </div>
      </div>
    );
  }
}
