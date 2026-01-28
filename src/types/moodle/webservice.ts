export interface ServiceFeature {
    name: string,
    value: number,
}

export interface ServiceFunction {
    name: string,
    version: string,
}

export interface WebserviceSiteInfo {
    sitename: string,
    username: string,
    firstname: string,
    lastname: string,
    fullname: string,
    lang: string,
    userid: number,
    siteurl: string,
    userpictureurl: string,
    functions: ServiceFunction[],
    downloadfiles: number,
    uploadfiles: number,
    release: string,
    version: string,
    mobilecssurl: string,
    advancedfeatures: ServiceFeature[],
    usercanmanageownfiles: boolean,
    userquota: number,
    usermaxuploadfilesize: number,
    userhomepage: number,
    userprivateaccesskey: string,
    siteid: number,
    sitecalendartype: string,
    usercalendartype: string,
    userissiteadmin: boolean,
    theme: string,
    limitconcurrentlogins: number
}
