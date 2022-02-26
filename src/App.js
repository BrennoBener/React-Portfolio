import { Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { LightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import MySkills from "./components/MySkills";
import WorkPage from "./components/WorkPage";

function App() {
  return <>
  <GlobalStyle />
    < ThemeProvider theme = {LightTheme}>
     <Switch>
       <Route exact path="/" component={Main}/>
       <Route exact path="/about" component={AboutPage}/>
       <Route exact path="/blog" component={BlogPage}/>
       <Route exact path="/skills" component={MySkills}/>
       <Route exact path="/work" component={WorkPage}/>
     </Switch>
    </ThemeProvider>
    </>
    
}

export default App

