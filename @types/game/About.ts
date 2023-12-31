interface About {
  id: number;
  age_ratings: number[];
  alternative_names: number[];
  artworks: number[];
  bundles: number[];
  category: number;
  collection: number;
  created_at: number;
  external_games: number[];
  first_release_date: number;
  follows: number;
  game_engines: number[];
  game_modes: number[];
  genres: { id: number; name: string }[];
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
  themes: { id: number; name: string }[];
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
