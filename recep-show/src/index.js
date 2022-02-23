import reactDom from "react-dom";
import BaseRouter from "./router/index"
import { GlobalStyled } from "./utils/css/reset"
import { Provider } from "react-redux"
import store from "./store/index"
reactDom.render(<div id="root"><Provider store={store}><GlobalStyled ></GlobalStyled><BaseRouter ></BaseRouter></Provider></div>,document.getElementById('root'))