export interface GamePlay {
  position: string;
  animalId: string;
  open: string;
  close: string;
  status: boolean;
}

export interface WordAndDescription {
  word: string;
  description: string;
}

export interface GamesCollection {
  gameId: string;
  displayImage: string;
  altImage: string;
  name: string;
  slug: string;
}
