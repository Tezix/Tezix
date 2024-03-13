import { Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from '../pages/HomePage/HomePage';
import Projects from '../components/Home/Projects/Projects';
import './transitions.css'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={
                <TransitionGroup>
                    <CSSTransition key="home" classNames="fade" timeout={300}>
                        <HomePage />
                    </CSSTransition>
                </TransitionGroup>
            } />
            <Route path={'/projects'} element={
                <TransitionGroup>
                    <CSSTransition key="projects" classNames="fade" timeout={300}>
                        <Projects />
                    </CSSTransition>
                </TransitionGroup>
            } />
        </Routes>
    );
};

export default AppRoutes;
