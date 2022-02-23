import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "../view/Login/LoginView/index"
import Register from "../view/register/index" 
import Clause from "../view/clause/index"
import ClassView from "../view/classView/index"
import Home from "../view/classView/Home/index"
import Message from "../view/classView/message/index"
import HomeKong from "../view/classView/HongKong/index"
import Anime from "../view/classView/anime/index"
import Eaocdent from "../view/classView/EA/index"
import TvShow from "../view/classView/tvshow/index"
import Movie from "../components/common/movieView/index"
import Tode from "../view/todo/index"
import Forum from "../components/todos/index"
import Tomment from "../view/todo/comment/index"
import Reply from "../view/todo/comment/reply/index"
const BaseRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/clause" element={<Clause></Clause>}></Route>
                <Route path="/class" element={<ClassView></ClassView>}>
                    <Route path="home" element={<Home></Home>}></Route>
                    <Route path="message" element={<Message></Message>}></Route>
                    <Route path="todo" element={<Tode></Tode>}></Route>
                </Route>
                <Route path="/homekong" element={<HomeKong></HomeKong>}></Route>
                <Route path="/anime" element={<Anime></Anime>}></Route>
                <Route path="/eaocdent" element={<Eaocdent></Eaocdent>}></Route>
                <Route path="/tvshow" element={<TvShow></TvShow>}></Route>
                <Route path="/movie" element={<Movie></Movie>}></Route>
                <Route path="/forum" element={<Forum></Forum>}></Route>
                <Route path="/comment" element={<Tomment></Tomment>}></Route>
                <Route path="/reply" element={<Reply></Reply>}></Route>
            </Routes>
         </Router>
     )
}
export default BaseRouter;