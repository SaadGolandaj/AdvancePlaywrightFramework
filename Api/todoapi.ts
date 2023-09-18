import { APIRequestContext } from "@playwright/test";
import Users from "../Models/Users";

export default class todoapi{

async addtodo(request:APIRequestContext,user:Users)
{
    return await request.post('/api/v1/tasks',
    {
        data:
         {
        isCompleted:false ,
        item:'mylearning',
    
         },
        headers:
         {
        Authorization:`Bearer ${user.getaccessToken()}`,      //this is we pass dynamically so its simbol is diff
    
        },
    })

}


}