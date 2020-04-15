export interface Book {
  id: string;
  title: string;
  details: string;
  debateQuestion: string;
  date: string;
  sides: Side[];
  youtubeLink: string;
}

export interface Side {
  name: string;
  details: string;
  link?: string;
}
