import {App_Services, Manage_Services} from '../Axios';
import {PATHS, getURL} from '../serverConfig';
import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {BaseModel, HomeModel, SystemModel, TopicModel} from './model';

const platform = Platform.OS;
const device_id = DeviceInfo.getUniqueId();
const key_app = 'm1904-4';

/**
 * Call API logout.
 * Return data model AuthenticateModel
 *
 */
function checkSystemChange() {
  let url = getURL(PATHS.check_system_change);
  return App_Services.get<BaseModel<SystemModel>>(url, {});
}

/**
 * Call API logout.
 * Return data model AuthenticateModel
 *
 * @param nation is string
 */
function getHome(nation: string) {
  let url = getURL(PATHS.home);
  url = url + `?nation=${nation}`;

  return App_Services.get<BaseModel<HomeModel>>(url, {});
}

/**
 * Call API logout.
 * Return data model AuthenticateModel
 *
 * @param topic_id is number
 */
function getTopicDetail(topic_id: number) {
  let url = getURL(PATHS.podcast_topic);
  url = url + `/${topic_id}`;

  return App_Services.get<BaseModel<TopicModel>>(url, {});
}

/**
 * Call API logout.
 * Return data model AuthenticateModel
 *
 * @param page is number
 */
function getListCategory(page: number) {
  let url = getURL(PATHS.podcast_category_list);
  url = url + `?page=${page}&keyword`;

  return App_Services.get(url, {});
}

/**
 * Call API logout.
 * Return data model AuthenticateModel
 *
 * @param cate_id is number
 * @param page is number
 */
function getTopicByCategory(cate_id: number, page: number) {
  let url = getURL(PATHS.podcast_topic_by_category);
  url = url + `?cate_id=${cate_id}&page=${page}`;

  return App_Services.get(url, {});
}

/**
 * Call API logout.
 * Return data model AuthenticateModel
 *
 * @param nation is string
 * @param page is number
 */
function getTopicByNation(nation: string, page: number) {
  let url = getURL(PATHS.podcast_topic_by_nation);
  url = url + `?nation=${nation}&page=${page}`;

  return App_Services.get(url, {});
}

/**
 * Call API logout.
 * Return data model AuthenticateModel
 *
 * @param page is number
 * @param topic_id is number
 */
function getPodcastByTopic(page: number, topic_id: number) {
  let url = getURL(PATHS.podcast_by_topic);
  url = url + `?page=${page}&topic_id=${topic_id}$keyword`;

  return App_Services.get(url, {});
}

/**
 * Call API logout.
 * Return data model AuthenticateModel
 *
 */
function getTopNationRadio() {
  let url = getURL(PATHS.top_nation_radio);
  return App_Services.get<BaseModel<Array<string>>>(url, {});
}

/**
 * Call API logout.
 * Return data model AuthenticateModel
 *
 * @param nation is string
 * @param page is number
 */
function getStationsByNation(nation: string, page: number) {
  let url = getURL(PATHS.get_stations_by_nation);
  url = url + `?nation=${nation}&page=${page}`;

  return App_Services.get(url, {});
}

/**
 * Call API logout.
 * Return data model AuthenticateModel
 *
 * @param keyword is string
 * @param page is number
 */
function searchPodcast(keyword: string, page: number) {
  let url = getURL(PATHS.search_podcast);
  url = url + `?keyword=${keyword}&page=${page}`;

  return App_Services.get(url, {});
}

/**
 * Call API logout.
 * Return data model AuthenticateModel
 *
 * @param keyword is string
 * @param page is number
 */
function searchRadio(keyword: string, page: number) {
  let url = getURL(PATHS.search_radio);
  url = url + `?keyword=${keyword}&page=${page}`;

  return App_Services.get(url, {});
}

/**
 * Call API logout.
 * Return data model AuthenticateModel
 *
 */
function signupDevice() {
  let url = getURL(PATHS.signup_device);
  url = url + `?platform=${platform}&device_id=${device_id}&key_app=${key_app}`;

  return App_Services.post(url, {});
}

/**
 * Call API logout.
 * Return data model AuthenticateModel
 *
 * @param email is string
 * @param name is string
 * @param content is string
 * @param type is string
 */
function reportFeedback(
  email: string,
  name: string,
  content: string,
  type: string,
) {
  let url = getURL(PATHS.report_feedback);
  url =
    url +
    `?email=${email}&name=${name}&key_app=${key_app}&device_id=${device_id}&content=${content}&type=${type}`;

  return Manage_Services.post(url, {});
}

const AppAPI = {
  checkSystemChange,
  getHome,
  getTopicDetail,
  getListCategory,
  getTopicByCategory,
  getTopicByNation,
  getPodcastByTopic,
  getTopNationRadio,
  getStationsByNation,
  searchPodcast,
  searchRadio,
  signupDevice,
  reportFeedback,
};

export default AppAPI;
