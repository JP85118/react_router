import aerodactyl from '../assets/Image/aerodactyl.png'
import bulbasaur from '../assets/Image/bulbasaur.png'
import charmander from '../assets/Image/charmander.png'
import '../assets/Styles/Poke1.css'

export const Pokemon1 = () => {
  return (
    <div className="container_poke">
      <div className='container_pokemon'>
            <h2 className='pokemon_title'>Aerodactyl</h2>
            <img className='pokemon_img' src={aerodactyl} alt="aerodactyl" />
          <div className='pokemon_info'>
            <p className='pokemon_text'>PS: <span>50</span></p>
            <p className='pokemon_text'>Ataque: <span>70</span></p>
            <p className='pokemon_text'>Defensa: <span>40</span></p>
            <p className='pokemon_text'>Ataque Especial: <span>40</span></p>
            <p className='pokemon_text'>Defensa Especial: <span>50</span></p>
            <p className='pokemon_text'>Velocidad: <span>80</span></p>
          </div>
        </div>

        <div className='container_pokemon'>
            <h2 className='pokemon_title'>Bulbasaur</h2>
            <img className='pokemon_img' src={bulbasaur} alt="bulbasaur" />
          <div className='pokemon_info'>
            <p className='pokemon_text'>PS: <span>30</span></p>
            <p className='pokemon_text'>Ataque: <span>30</span></p>
            <p className='pokemon_text'>Defensa: <span>30</span></p>
            <p className='pokemon_text'>Ataque Especial: <span>40</span></p>
            <p className='pokemon_text'>Defensa Especial: <span>40</span></p>
            <p className='pokemon_text'>Velocidad: <span>30</span></p>
          </div>
        </div>

        <div className='container_pokemon'>
            <h2 className='pokemon_title'>Charmander</h2>
            <img className='pokemon_img' src={charmander} alt="charmander" />
          <div className='pokemon_info'>
            <p className='pokemon_text'>PS: <span>30</span></p>
            <p className='pokemon_text'>Ataque: <span>40</span></p>
            <p className='pokemon_text'>Defensa: <span>30</span></p>
            <p className='pokemon_text'>Ataque Especial: <span>40</span></p>
            <p className='pokemon_text'>Defensa Especial: <span>30</span></p>
            <p className='pokemon_text'>Velocidad: <span>40</span></p>
          </div>
        </div>
    </div>
  )
}

