import React from 'react';
import Pokemon from './Pokemon';
import Button from './button';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      pokemonType: 'all',
    };
  }

  defineType(pokemonType) {
    this.setState({ pokemonType, pokemonIndex: 0 });
  }

  nextPokemon() {
    this.setState(state => ({
      pokemonIndex: state.pokemonIndex + 1,
    }));
  }

  returnPokemon() {
    this.setState(state => ({
      pokemonIndex: state.pokemonIndex - 1,
    }));
  }

  filterPokemons() {
    return (this.state.pokemonType === 'all') ? this.props.pokemons : this.props.pokemons.filter(pokemon => pokemon.type === this.state.pokemonType);
  }

  render() {
    const filteredPokemons = this.filterPokemons();
    const pokemonTypes = [...new Set(this.props.pokemons.reduce((types, { type }) => [...types, type], []))];
    const pokemon = filteredPokemons[this.state.pokemonIndex];

    return (
      <div className="pokedex">
        <Pokemon pokemon={ pokemon } />
        
        <div className="types">
          <Button
            onClick={() => this.defineType('all')}
            className="filter-button"
          >
            All
          </Button>
          {pokemonTypes.map(type => (
            <Button
              key={ type }
              onClick={() => this.defineType(type)}
              className="filter-button"
            >
              { type }
            </Button>
          ))}
        </div>
        
        <div className='nav'>
        <Button
          className="pokedex-button"
          onClick={() => this.returnPokemon()}
          disabled={ this.state.pokemonIndex <= 0 }
        >
          Pokemon anterior
        </Button>
        <Button
          className="pokedex-button"
          onClick={() => this.nextPokemon()}
          disabled={ this.state.pokemonIndex >= (filteredPokemons.length - 1)}
        >
          Próximo pokémon
        </Button>
        </div>

      </div>
    );
  }
}

export default Pokedex;