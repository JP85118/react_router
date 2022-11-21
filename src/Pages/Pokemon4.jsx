import '../assets/Styles/Poke4.css'
import pikachu from '../assets/Image/pikachu.png'
import politoed from '../assets/Image/politoed.png'
import ponyta from '../assets/Image/ponyta.png'

export const Pokemon4 = () => {
  return (
    <div className='container_poke'>
      <div className='container_pokemon'>
            <h2 className='pokemon_title'>Pikachu</h2>
            <img className='pokemon_img' src={pikachu} alt="pikachu" />
          <div className='pokemon_info'>
            <p className='pokemon_text'>PS: <span>30</span></p>
            <p className='pokemon_text'>Ataque: <span>40</span></p>
            <p className='pokemon_text'>Defensa: <span>30</span></p>
            <p className='pokemon_text'>Ataque Especial: <span>30</span></p>
            <p className='pokemon_text'>Defensa Especial: <span>30</span></p>
            <p className='pokemon_text'>Velocidad: <span>60</span></p>
          </div>
        </div>

        <div className='container_pokemon'>
            <h2 className='pokemon_title'>Politoed</h2>
            <img className='pokemon_img' src={politoed} alt="politoed" />
          <div className='pokemon_info'>
            <p className='pokemon_text'>PS: <span>60</span></p>
            <p className='pokemon_text'>Ataque: <span>50</span></p>
            <p className='pokemon_text'>Defensa: <span>50</span></p>
            <p className='pokemon_text'>Ataque Especial: <span>60</span></p>
            <p className='pokemon_text'>Defensa Especial: <span>60</span></p>
            <p className='pokemon_text'>Velocidad: <span>50</span></p>
          </div>
        </div>

        <div className='container_pokemon'>
            <h2 className='pokemon_title'>Ponyta</h2>
            <img className='pokemon_img' src={ponyta} alt="ponyta" />
          <div className='pokemon_info'>
            <p className='pokemon_text'>PS: <span>30</span></p>
            <p className='pokemon_text'>Ataque: <span>50</span></p>
            <p className='pokemon_text'>Defensa: <span>40</span></p>
            <p className='pokemon_text'>Ataque Especial: 40</p>
            <p className='pokemon_text'>Defensa Especial: 40</p>
            <p className='pokemon_text'>Velocidad: 60</p>
          </div>
        </div>
    </div>
  )
}

