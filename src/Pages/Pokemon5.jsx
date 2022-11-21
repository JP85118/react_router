import '../assets/Styles/Poke5.css'
import rhyhorn from '../assets/Image/rhyhorn.png'
import squirtle from '../assets/Image/Squirtle.png'
import zapdos from '../assets/Image/zapdos.png'

export const Pokemon5 = () => {
  return (
    <div className='container_poke'>
      <div className='container_pokemon'>
            <h2 className='pokemon_title'>Rhyhorn</h2>
            <img className='pokemon_img' src={rhyhorn} alt="rhyhorn" />
          <div className='pokemon_info'>
            <p className='pokemon_text'>PS: <span>50</span></p>
            <p className='pokemon_text'>Ataque:<span>50</span></p>
            <p className='pokemon_text'>Defensa: <span>60</span></p>
            <p className='pokemon_text'>Ataque Especial: <span>20</span></p>
            <p className='pokemon_text'>Defensa Especial: <span>20</span></p>
            <p className='pokemon_text'>Velocidad: <span>20</span></p>
          </div>
        </div>

        <div className='container_pokemon'>
            <h2 className='pokemon_title'>Squirtle</h2>
            <img className='pokemon_img' src={squirtle} alt="squirtle" />
          <div className='pokemon_info'>
            <p className='pokemon_text'>PS: <span>30</span></p>
            <p className='pokemon_text'>Ataque: <span>30</span></p>
            <p className='pokemon_text'>Defensa: <span>40</span></p>
            <p className='pokemon_text'>Ataque Especial: <span>30</span></p>
            <p className='pokemon_text'>Defensa Especial: <span>40</span></p>
            <p className='pokemon_text'>Velocidad: <span>30</span></p>
          </div>
        </div>

        <div className='container_pokemon'>
            <h2 className='pokemon_title'>Zapdos</h2>
            <img className='pokemon_img' src={zapdos} alt="zapdos" />
          <div className='pokemon_info'>
            <p className='pokemon_text'>PS: <span>60</span></p>
            <p className='pokemon_text'>Ataque: <span>60</span></p>
            <p className='pokemon_text'>Defensa: <span>50</span></p>
            <p className='pokemon_text'>Ataque Especial: <span>80</span></p>
            <p className='pokemon_text'>Defensa Especial: <span>50</span></p>
            <p className='pokemon_text'>Velocidad: <span>50</span></p>
          </div>
        </div>
    </div>
  )
}

