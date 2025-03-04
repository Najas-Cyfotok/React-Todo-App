// import  from './baseurl'
import { baseURL } from './baseurl'
import commonAPI from './commonAPI'

export const taskADD = async(reqBody)=>{
    return await commonAPI("POST",`${baseURL}/tasks`,reqBody)
}

export const getTasks = async()=>{
    return await commonAPI(`GET`,`${baseURL}/tasks`,"")
}