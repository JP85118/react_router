import { NavLink } from "react-router-dom"


export const NavBar = () => {
  return (
    <>
      <div className="container_nav">
        <NavLink className={({isActive})=> isActive ? "activado" : "poke"} to='/'>PokeHome</NavLink>
        <NavLink className={({isActive})=> isActive ? "activado1" : "poke"} to='/Pokemon1'>Poke1</NavLink>
        <NavLink className={({isActive})=> isActive ? "activado2" : "poke"} to='/Pokemon2'>Poke2</NavLink>
        <NavLink className={({isActive})=> isActive ? "activado3" : "poke"} to='/Pokemon3'>Poke3</NavLink>
        <NavLink className={({isActive})=> isActive ? "activado4" : "poke"} to='/Pokemon4'>Poke4</NavLink>
        <NavLink className={({isActive})=> isActive ? "activado5" : "poke"} to='/Pokemon5'>Poke5</NavLink>
      </div>
    </>
  )
}
