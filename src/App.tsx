import "./App.css"
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from "./About";
import NavItem from "./NavItem";
import Talks from "./Talks";
import Links from "./Links";
import Redirect from "./Redirect";

function App() {
  return (
    <Router>
        <div className="mx-auto mt-14 max-w-7xl px-6 lg:px-8">
            <NavItem props={{to: '/', title: 'home'} } />
            <NavItem props={{to: '/talks', title: 'talks'} } />
            <NavItem props={{to: '/links', title: 'links'} } />
        </div>
        <div className="bg-grey py-24 sm:py-32">
            <div className="md:flex mx-auto max-w-7xl px-6 lg:px-8">
                <Routes>
                    <Route path="/" element={ <About />} />
                    <Route path="/talks" element={ <Talks />} />
                    <Route path="/links" element={ <Links />} />

                    // Redirect to old blog posts in case people still have links
                    <Route path="/a-bit-about-kanban/" element={ <Redirect to="https://dev.to/paulinevos/a-bit-about-kanban-281b" />} />
                    <Route path="/atomic-commits/" element={ <Redirect to="https://dev.to/paulinevos/atomic-commits-will-help-you-git-legit-35i7" />} />
                    <Route path="/fix-bugs-⚡-fast-with-regression-tests-and-auto-bisect/" element={ <Redirect to="https://dev.to/paulinevos/fix-bugs-fast-with-regression-tests-and-auto-bisect-3khh" />} />
                    <Route path="/git-legit-cheatsheet/" element={ <Redirect to="https://dev.to/paulinevos/git-legit-cheat-sheet-2gf0" />} />
                </Routes>
            </div>
        </div>
    </Router>
  )
}

export default App
