import {Track} from 'react-native-track-player';
import {CategoryModel} from '../services/api/model';

export type FilterProps = {
  name: string;
  onPress: () => void;
  isActive: boolean;
  color: string;
};

export type LoadingProps = {
  isLoading: boolean;
};

export type IconProps = {
  isActive?: boolean;
};

export type HeaderProps = {
  title: string;
  haveSearch?: boolean;
};

export type TrackPlayerHeaderProps = {
  title: string;
};

export type SeeAllViewProps = {
  title: string;
  onPress: () => void;
  children: any;
};

export type ListViewProps = {
  title: string;
};

export type CategoryViewProps = {
  category: CategoryModel;
};

export type TopicViewProps = {
  topic: TopicProps;
  isRectangle?: boolean;
};

export type TopicViewRowProps = {
  topic: TopicProps;
};

export type PodcastViewProps = {
  podcast: Track;
  favorite: boolean;
  list: Array<Track>;
};

export type RadioViewProps = {
  track: Track;
  favorite: boolean;
};

export type TopicProps = {
  id: number;
  topic_name: string;
  image: string;
  num_podcast_count: number;
};

// export type TrackProps = {
//   id: number;
//   nation: string;
//   tags: string;
//   url: string;
//   title: string;
//   artwork: string;
//   type: string;
//   artist: string;
//   length_sec?: number;
//   description?: string;
//   created_time?: string;
// };

export type NationViewProps = {
  name: string;
  onPress: () => void;
};

export type TopNationViewProps = {
  name: string;
  onPress: () => void;
  isActive: boolean;
};

export type RadioCenterProps = {
  track: Track;
};

export type LanguageProps = {
  label: string;
  value: string;
};

export type EmptyViewProps = {
  title: string;
};

export type AdmobBannerProps = {
  size?: string;
};
