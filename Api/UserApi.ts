import { APIRequestContext } from "@playwright/test";
import Users from "../Models/Users";

export default class Userapi{

async Signup(request:APIRequestContext,user:Users)
{
    return await request.post("/api/v1/users/register",{
        data:{
            email:user.getemail(),
            firstName:user.getfirstname(),
            lastName:user.getlastname(),
            password:user.getpassword()
        }})

}








}