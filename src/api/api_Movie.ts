import { appInfo } from '../constants/appInfo'
import Get from './index'
const getListMovie = async ({ url }: { url: string }) => {
    const fullUrl = appInfo.API_ListMovie + url
    const res = await Get(fullUrl)
    return res
}
export default (getListMovie)