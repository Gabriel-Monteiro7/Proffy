import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "pages/Landing";

export default function Routes(props: any) {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
    </BrowserRouter>
  );
}
