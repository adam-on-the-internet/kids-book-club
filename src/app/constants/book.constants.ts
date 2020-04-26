// tslint:disable: max-line-length
import { Book } from "../models/Book.model";

export const MIKE_MULLIGAN: Book = {
  id: "1",
  title: "Mike Mulligan and his Steam Shovel",
  details: `The first book for the kids book debate club is
  Mike Mulligan and his Steam Shovel. You can watch someone
  read the book out loud (with the illustrations!) below.`,
  debateQuestion: `The book claims that Mike Mulligan loves Mary Anne, but is their love related to the working relationship they have? Or is their love deep and noble?`,
  date: "Sunday, April 19, 2020",
  sides: [
    {
      name: "TRUE LOVE",
      details: "Mike Mulligan has a true, deep love and respect for Mary Anne that goes far beyond their working relationship.",
    },
    {
      name: "BASE LOVE",
      details: "Mike Mulligan has a base love for Mary Anne, that does not go far past their working relationship.",
    },
  ],
  youtubeLink: "NQjHJKNyoUE",
};

export const SYLVESTER: Book = {
  id: "2",
  title: "Sylvester and the Magic Pebble",
  details: `The second book for the kids book debate club is
  Sylvester and the Magic Pebble, the story of a donkey who collects strange rocks. There are PDF and YouTube links available for this story.`,
  debateQuestion: null,
  date: "Sunday, May 17th, 2020",
  sides: [
  ],
  youtubeLink: "BNGUnk8JeLE",
  pdfLink: "https://epdf.pub/sylvester-and-the-magic-pebble.html",
};

export const BOOK_LIST: Book[] = [
  SYLVESTER,
  MIKE_MULLIGAN,
];
