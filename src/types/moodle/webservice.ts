export interface UserPreference {
  name: string;
  value: string | number | boolean;
}

export interface UserInfo {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  fullname: string;
  email: string;
  department: string;
  firstaccess: number;
  lastaccess: number;
  auth: string;
  suspended: boolean;
  confirmed: boolean;
  lang: string;
  theme: string;
  timezone: string;
  mailformat: number;
  description: string;
  descriptionformat: number;
  profileimageurlsmall: string;
  profileimageurl: string;
  preferences: UserPreference[];
}

export interface UserInfoList {
  users: UserInfo[];
}

export interface ServiceFeature {
  name: string;
  value: number;
}

export interface ServiceFunction {
  name: string;
  version: string;
}

export interface WebserviceSiteInfo {
  sitename: string;
  username: string;
  firstname: string;
  lastname: string;
  fullname: string;
  lang: string;
  userid: number;
  siteurl: string;
  userpictureurl: string;
  functions: ServiceFunction[];
  downloadfiles: number;
  uploadfiles: number;
  release: string;
  version: string;
  mobilecssurl: string;
  advancedfeatures: ServiceFeature[];
  usercanmanageownfiles: boolean;
  userquota: number;
  usermaxuploadfilesize: number;
  userhomepage: number;
  userprivateaccesskey: string;
  siteid: number;
  sitecalendartype: string;
  usercalendartype: string;
  userissiteadmin: boolean;
  theme: string;
  limitconcurrentlogins: number;
}
