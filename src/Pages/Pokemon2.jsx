import '../assets/Styles/Poke2.css'
import cubone from '../assets/Image/cubone.png'
import growlithe from '../assets/Image/growlithe.png'
import meowth from '../assets/Image/meowth.png'

export const Pokemon2 = () => {
  return (
    <div className='container_poke'>
      <div className='container_pokemon'>
            <h2 className='pokemon_title'>Cubone</h2>
            <img className='pokemon_img' src={cubone} alt="cubone" />
          <div className='pokemon_info'>
            <p className='pokemon_text'>PS: <span>30</span></p>
            <p className='pokemon_text'>Ataque: <span>30</span></p>
            <p className='pokemon_text'>Defensa: <span>60</span></p>
            <p className='pokemon_text'>Ataque Especial: <span>30</span></p>
            <p className='pokemon_text'>Defensa Especial: <span>30</span></p>
            <p className='pokemon_text'>Velocidad: <span>30</span></p>
          </div>
        </div>

        <div className='container_pokemon'>
            <h2 className='pokemon_title'>Growlithe</h2>
            <img className='pokemon_img' src={growlithe} alt="growlithe" />
          <div className='pokemon_info'>
            <p className='pokemon_text'>PS: <span>40</span></p>
            <p className='pokemon_text'>Ataque: <span>50</span></p>
            <p className='pokemon_text'>Defensa: <span>30</span></p>
            <p className='pokemon_text'>Ataque Especial: <span>50</span></p>
            <p className='pokemon_text'>Defensa Especial: <span>30</span></p>
            <p className='pokemon_text'>Velocidad: <span>40</span></p>
          </div>
        </div>

        <div className='container_pokemon'>
            <h2 className='pokemon_title'>Meowth</h2>
            <img className='pokemon_img' src={meowth} alt="meowth" />
          <div className='pokemon_info'>
            <p className='pokemon_text'>PS: <span>30</span></p>
            <p className='pokemon_text'>Ataque: <span>30</span></p>
            <p className='pokemon_text'>Defensa: <span>30</span></p>
            <p className='pokemon_text'>Ataque Especial: <span>30</span></p>
            <p className='pokemon_text'>Defensa Especial: <span>30</span></p>
            <p className='pokemon_text'>Velocidad: <span>60</span></p>
          </div>
        </div>
    </div>
  )
}

