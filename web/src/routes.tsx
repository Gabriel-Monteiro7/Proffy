import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "pages/Landing";
import TeacherList from "pages/TeacherList";
export default function Routes(props: any) {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
      <Route path="/study" component={TeacherList} />
    </BrowserRouter>
  );
}
