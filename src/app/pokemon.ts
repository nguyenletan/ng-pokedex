class Pokemon {
  private id: string;
  private name: string;
  private sprite: string;
  private type: string;
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.sprite = data.sprites.front_default;
    this.type = data.types[0].type.name;
  }
}


export default Pokemon;
