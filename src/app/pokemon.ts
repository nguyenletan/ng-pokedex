class Pokemon {
  public id: string;
  public name: string;
  public sprite: string;
  public type: string;
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.sprite = data.sprites.front_default;
    this.type = data.types[0].type.name;
  }
}


export default Pokemon;
