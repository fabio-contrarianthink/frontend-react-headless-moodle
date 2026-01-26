export interface CourseFormatOptions {
    name: string,
    value: number,
}

export interface Course {
    id: number,
    shortname: string,
    categoryid: number,
    categorysortorder: number,
    fullname: string,
    displayname: string,
    idnumber: string,
    summary: string,
    summaryformat: number,
    format: string,
    showgrades: number,
    newsitems: number,
    startdate: number,
    enddate: number,
    numsections: number,
    maxbytes: number,
    showreports: number,
    visible: number,
    groupmode: number,
    groupmodeforce: number,
    defaultgroupingid: number,
    timecreated: number,
    timemodified: number,
    enablecompletion: number,
    completionnotify: number,
    lang: string,
    forcetheme: string,
    showactivitydates: boolean,
    courseformatoptions: CourseFormatOptions[],
    // What this is supposed to be besides nullable?
    // showcompletionconditions: null
}

