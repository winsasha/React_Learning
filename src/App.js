import './App.css';
import React from "react";
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)

function Menu(){
    return(
        <nav className="nav">
            <NavLink className="nav-link active" aria-current="page" to="/">Главная</NavLink>
            <NavLink className="nav-link" to="/about">О нас</NavLink>
            <NavLink className="nav-link" to="/contact-us">Контакты</NavLink>
        </nav>
    )
}

function Main(){
    return (
        <div className="container-fluid py-5">
            <div className="col-md-5 mx-auto p-3">
                <p>
                    <h1 className="text-center pb-5">Классический текст Lorem Ipsum, используемый с XVI века</h1>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        </div>
    )
}
function About(){
    return (
        <div className="container pt-5">
            <h1 className="text-center pb-5">Изучаемые технологии</h1>
            <div className="row text-center mt-3">
                <div className="col-sm-3">
                    <i className="fab fa-html5 fa-10x"/>
                    <h3>HTML</h3>
                </div>
                <div className="col-sm-3">
                    <i className="fab fa-css3-alt fa-10x"/>
                    <h3>CSS</h3>
                </div>
                <div className="col-sm-3">
                    <i className="fab fa-js-square fa-10x"/>
                    <h3>JavaScript</h3>
                </div>
                <div className="col-sm-3">
                <i className="fab fa-react fa-10x"/>
                <h3>React</h3>
                </div>
            </div>
        </div>
    )
}

function ContactUs(){
    return (
        <div className="container my-5">
            <h1 className="text-center my-5">Что-бы с нами связяться</h1>
            <form action="">
                <div className="mb-3"><input type="text" className="form-control"/>Напишите как Вас зовут</div>
                <div className="mb-3"><input type="text" className="form-control"/>Введите Ваш e-mail</div>
                <div className="mb-3"><textarea className="form-control"/>Напишите Ваше сообщение</div>
                <div className="mb-3"><input type="submit" className="form-control btn btn-primary"/></div>
            </form>
        </div>
    )
}
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu/>
                <Route exact path="/" render={()=><Main/>} />
                <Route path="/about" render={()=><About/>}/>
                <Route path="/contact-us" render={()=><ContactUs/>}/>
            </BrowserRouter>
        </div>
    );
}

export default App;