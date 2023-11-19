export type CardStatus = 'Available' | 'Borrowed';

export type CardType = {
  id: number;
  title: string;
  content: string;
  footerText: string;
  imagePath: string;
  showButton: boolean;
  status: CardStatus;
};
