import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home/home";
import Company from "./component/Home/company";
import Layout from "./HOCs/layout";
import Services from "./component/Home/services";
import Products from "./component/Home/products";
import Contact_page from "./component/Home/contact_us";


class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <BrowserRouter>
          <Route  path="/Contact_page" component={Contact_page} />
            <Route  path="/company" component={Company} />
            <Route  path="/services" component={Services} />
            <Route  path="/ourproducts" component={Products} />
            <Route exact path="/" component={Home} />
          </BrowserRouter>
        </Switch>
      </Layout>
    );
  }
}
export default Routes;
