export type movies = {
  id: number;
  poster_path: string;
  vote_average: number;
  title: string;
  imageBaseUrl: string;
};
export type pageProps = {
  type: number;
  page: string;
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
