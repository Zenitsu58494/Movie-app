export type movies = {
  id: number;
  poster_path: string;
  vote_average: number;
  title: string;
  imageBaseUrl: string;
  type: string;
};
export type pageProps = {
  type: string;
  page: number;
  params: any;
};
export type props = {
  params: {
    id: string;
  };
};
export type creators = {
  profession: string;
  name: string;
};
export type MovieType = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
};
