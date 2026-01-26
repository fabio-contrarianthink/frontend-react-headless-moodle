import type { Course } from "@/types/moodle/course";

const apiRoot = "https://moodle.contrarianthink-staging.com/webservice/rest/server.php";

const apiParamsConfiguration = {
    wstoken: "22617786f12504ad1bf19657a620c8f3",
    moodlewsrestformat: "json",
}

function configureParams(toMerge: object): object
{
    return {
        ...apiParamsConfiguration,
        ...toMerge
    }
}

function apiUrl(params: object)
{
    const configuredParams = configureParams(params);
    return apiRoot + "?" + ((new URLSearchParams(configuredParams as string[][])).toString());
}

async function functionCall(wsfunction: string)
{
    const params = {
        wsfunction: wsfunction
    };

    return fetch(apiUrl(params));
}


export async function coreCoursesGetCourses() : Promise<Course[]>
{
    try {
        const response = await functionCall("core_course_get_courses");
        const responseBody = await response.json();
        return responseBody as Course[];
    } catch (error) {
        console.log(error);
    }
    return [];
}

