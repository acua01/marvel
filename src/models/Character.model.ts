export interface ICharacter {
  id: string;
  name: string;
  image?: string;
}

export interface ICharacterDetails extends ICharacter {
  description: string;
}
