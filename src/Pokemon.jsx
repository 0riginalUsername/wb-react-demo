import axios from 'axios';
import { useEffect, useState } from 'react';


function Pokemon(props) {
    const {num} = props

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${num}`)
        .then(res => {
            setPokemon(res.data.results)
            console.log(res.data.results);
        })

    }, []) 

    const pokemonlist = pokemon.map((monster) => <li key={monster.name}> {monster.name}</li>)

    return (
        <ul>
            {pokemonlist}
        </ul>
    )
}

export default Pokemon