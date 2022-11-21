import '../assets/Styles/Poke3.css'
import mewtwo from '../assets/Image/mewtwo.png'
import moltres from '../assets/Image/moltres.png'
import pidgey from '../assets/Image/pidgey.png'

export const Pokemon3 = () => {
  return (
    <div className='container_poke'>
      <div className='container_pokemon'>
            <h2 className='pokemon_title'>Mewtwo</h2>
            <img className='pokemon_img' src={mewtwo} alt="mewtwo" />
          <div className='pokemon_info'>
            <p className='pokemon_text'>PS: <span>70</span></p>
            <p className='pokemon_text'>Ataque: <span>70</span></p>
            <p className='pokemon_text'>Defensa: <span>60</span></p>
            <p className='pokemon_text'>Ataque Especial: <span>100</span></p>
            <p className='pokemon_text'>Defensa Especial: <span>60</span></p>
            <p className='pokemon_text'>Velocidad: <span>80</span></p>
          </div>
        </div>

        <div className='container_pokemon'>
            <h2 className='pokemon_title'>Moltres</h2>
            <img className='pokemon_img' src={moltres} alt="moltres" />
          <div className='pokemon_info'>
            <p className='pokemon_text'>PS: <span>60</span></p>
            <p className='pokemon_text'>Ataque: <span>60</span></p>
            <p className='pokemon_text'>Defensa: <span>60</span></p>
            <p className='pokemon_text'>Ataque Especial: <span>80</span></p>
            <p className='pokemon_text'>Defensa Especial: <span>50</span></p>
            <p className='pokemon_text'>Velocidad: <span>60</span></p>
          </div>
        </div>

        <div className='container_pokemon'>
            <h2 className='pokemon_title'>Pidgey</h2>
            <img className='pokemon_img' src={pidgey} alt="pidgey" />
          <div className='pokemon_info'>
            <p className='pokemon_text'>PS: <span>30</span></p>
            <p className='pokemon_text'>Ataque: <span>30</span></p>
            <p className='pokemon_text'>Defensa: <span>30</span></p>
            <p className='pokemon_text'>Ataque Especial: <span>30</span></p>
            <p className='pokemon_text'>Defensa Especial: <span>30</span></p>
            <p className='pokemon_text'>Velocidad: <span>40</span></p>
          </div>
        </div>
    </div>
  )
}

