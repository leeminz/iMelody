export type BaseModel<T> = {
  success: boolean;
  data?: T;
  message: string;
};

export type TopicModel = {
  id: number;
  topic_name: string;
  image: string;
  description?: string;
  categories?: CategoryModel;
  num_podcast_count: number;
};

export type TopicFirstModel = {
  data?: Array<TopicModel>;
};

export type CategoryModel = {
  id: number;
  name: string;
  image?: string;
  topics?: Array<TopicModel>;
};

export type SystemModel = {
  version: string;
  change_redux: boolean;
};

export type HomeModel = {
  categories_home: Array<CategoryModel>;
  topics_suggest: Array<TopicModel>;
  nations_top: Array<string>;
  categories_top: Array<CategoryModel>;
  topics_first: TopicFirstModel;
};
