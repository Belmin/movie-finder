import { BaseDetails } from './base-details';
import { CreatedBy } from './created-by';
import { Genre } from './genre';
import { LastEpisodeToAir } from './last-episode-to-air';
import { Network } from './network';
import { ProductionCompany } from './production-company';
import { ProductionCountry } from './production-country';
import { Season } from './season';
import { SpokenLanguage } from './spoken-language';
import { Videos } from './video';

export interface TvShowDetails extends BaseDetails {
  backdrop_path?: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  videos: Videos;
}
