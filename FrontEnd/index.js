import react from "react"
import reactDom from "react-dom"
import {App} from "./components/App"

const DOM = document.querySelector("#root")

const root = ReactDOM.createRoot(DOM)

root.render(App)

