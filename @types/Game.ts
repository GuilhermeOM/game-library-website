interface Game {
  id: number;
  age_ratings: number[];
  alternative_names: number[];
  artworks: number[];
  bundles: number[];
  category: number;
  collection: number;
  cover: Cover;
  created_at: number;
  external_games: number[];
  first_release_date: number;
  follows: number;
  game_engines: number[];
  game_modes: number[];
  genres: Genre[];
  involved_companies: number[];
  name: string;
  platforms: Platform[];
  player_perspectives: number[];
  rating: number;
  rating_count: number;
  release_dates: number[];
  screenshots: number[];
  similar_games: number[];
  slug: string;
  storyline: string;
  summary: string;
  tags: number[];
  themes: Theme[];
  total_rating: number;
  total_rating_count: number;
  updated_at: number;
  url: string;
  version_parent: number;
  version_title: string;
  videos: number[];
  websites: number[];
  checksum: string;
  language_supports: number[];
  game_localizations: number[];
}

interface Theme {
  id: number;
  name: string;
}

interface Cover {
  id: number;
  image_id: string;
  animated: boolean;
  height: number;
  width: number;
  url: string;
  hd?: GameHDImage;
}

interface Genre {
  id: number;
  name: string;
}

interface Platform {
  id: number;
  abbreviation: string;
  alternative_name: string;
  name: string;
}
