import { APIRequestContext, BrowserContext, Page } from "@playwright/test";
import User from "../Models/Users";
import UserApi from "../Api/UserApi";
import config from "../playwright.config"

export default class SignUPPage{

    async load(page:Page){
        await page.goto("/signup")

    }
    


    //here we define the css 
     private get firstnameinput()         //we make it private because we call this method through class only
    {
        return '[data-testid=first-name]'
    }
    private get lastnameinput()
    {
        return '[data-testid=last-name]'
    }
    private get emailinput()
    {
        return '[data-testid=email]'
    }
    private get passwordinput()
    {
        return '[data-testid=password]'
    }

    private get confirmpasswordinput()
    {
        return '[data-testid=confirm-password]'
    }

    private get submitbutton()
    {
        return '[data-testid=submit]'
    }



   async signup(page:Page,user:User)
   {
    await page.locator(this.firstnameinput).fill(user.getfirstname())
    await page.locator(this.lastnameinput).fill(user.getlastname())
    await page.locator(this.emailinput).fill(user.getemail())
    await page.locator(this.passwordinput).fill(user.getpassword())
    await page.locator(this.confirmpasswordinput).fill(user.getconfirmpassword())
    await page.locator(this.submitbutton).click()


   }

   async Signupbyapi(request:APIRequestContext,user:User,context:BrowserContext)
   {

    const response=await new UserApi().Signup(request,user)
    const responsebody=await response.json()   //if you miss the await then it wont work because response in async
    const access_token=responsebody.access_token
    const firstName=responsebody.firstName
    const userID=responsebody.userID

    console.log(access_token,firstName,userID)

    user.setAccesstoken(access_token)
    user.setUserID(userID)

    await context.addCookies([
    {
       name:'firstName',             //must be mension as String 
       value:firstName,
       url:config.use?.baseURL,
    },
    {
        name:'access_token',
       value:access_token,
       url:config.use?.baseURL,

    },
    {
        name:'userID',
        value:userID,
        url:config.use?.baseURL,

    }
])

   }





}