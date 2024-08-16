import { appInfo } from "../constants/appInfo"

const showImg = (url: string) => {
    const domain = (appInfo.API_Img_From_List);
    const containsDomain = url.includes(domain);
    return (containsDomain ? url : appInfo.API_Img_From_List + url)
}

export default showImg