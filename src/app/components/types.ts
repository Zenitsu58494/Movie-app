export type movies = {
  id: number;
  poster_path: string;
  vote_average: number;
  title: string;
  imageBaseUrl: string;
};
export type PageProps = {
  params: {
    dynamicPage: string;
  };
};
