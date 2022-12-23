const APP = {
  TYPE: 'Develop',
  BASE_URL: 'https://manager-apps.sunnytees.co/api/v2/free-radio/',
};

const MANAGE = {
  TYPE: 'Manage',
  BASE_URL: 'https://manager-apps.sunnytees.co/api/v1/',
};

const PATHS = {
  check_system_change: 'check-system-change',
  home: 'podcast-home',
  podcast_topic: 'podcast-topic',
  podcast_category_list: 'podcast-categories-list',
  podcast_topic_by_category: 'podcast-topic-by-category',
  podcast_topic_by_nation: 'podcast-topic-by-nation',
  podcast_by_topic: 'podcast-by-topic',
  top_nation_radio: 'top-nation-radio',
  search_podcast: 'search/type/1',
  search_radio: 'search/type/0',
  get_stations_by_nation: 'get-stations-by-nation',
  signup_device: 'signup-device',
  report_feedback: 'report-feedback',
};

/**
 * Return API url paths
 *
 * @param path is PATHS
 */
function getURL(path: string) {
  return `${path}`;
}

export {APP, MANAGE, PATHS, getURL};
