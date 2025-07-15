import { increment, decrement } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";   //   const {count, sumar, restar, hacerGuiso} = useContext(countContext)


export default function Count() {

  const dispatch = useDispatch()
  const count = useSelector(state => state.count)   // 0

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>SUMAR</button>
      <div></div>
      <button onClick={() => dispatch(decrement())}>RESTAR</button>
    </div>
  )
}
