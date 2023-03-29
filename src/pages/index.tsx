import type { NextPage } from "next"
import Head from "next/head"
// import {
//   AppDispatch,
//   RootState,
//   useAppDispatch,
//   useAppSelector,
// } from "../store"
import { ReactElement } from "react"
import Home from "./home"


const Main = () => {
  // const { theme } = useAppSelector<any>((store: RootState) => store.theme)
  // const dispatch: AppDispatch = useAppDispatch()

  // const themeToggler = () => {
  //   theme === "dark" ? dispatch(setTheme("light")) : dispatch(setTheme("dark"))
  // }

  return (
    <div
      style={{
        padding: 0,
      }}
    >
      {/* <button onClick={themeToggler}>Switch</button> */}
      <Home />
    </div>
  )
}

export default Main
