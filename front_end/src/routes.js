import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/login";
import SingUp from "./pages/singup.js";
import Splash from "./pages/splash";
import Levels from "./pages/levels";
import QuestionOne from "./pages/questions/questionOne";
import Congratulations from "./pages/congratulations";
import QuestionTwo from "./pages/questions/questionTwo";
import CongratulationsTwo from "./pages/congratulationsTwo";
import QuestionFive from "./pages/questions/questionFive";
import Ranking from "./pages/Ranking/index";
import Mentoria from "./pages/Mentorias/index";
import ChatMentor from "./pages/Chat/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/landing" exact component={Splash} />
        <Route path="/cadastro" exact component={SingUp} />
        <Route path="/perguntas" exact component={Levels} />
        <Route path="/ranking" exact component={Ranking} />

        <Route path="/question" exact component={QuestionOne} />
        <Route path="/questionTwo" exact component={QuestionTwo} />
        <Route path="/questionFive" exact component={QuestionFive} />
        <Route path="/mentoria" exact component={Mentoria} />
        <Route path="/chat-mentor" exact component={ChatMentor} />

        <Route path="/congratulations" exact component={Congratulations} />
        <Route
          path="/congratulationsTwo"
          exact
          component={CongratulationsTwo}
        />
      </Switch>
    </BrowserRouter>
  );
}
