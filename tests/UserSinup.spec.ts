import { faker } from '@faker-js/faker'
import User from '../Models/Users'

import{test,expect} from '@playwright/test'
import SignUPPage from '../pages/SignUppage'
import todoPage from '../pages/todoPages'
import todoPages from '../pages/todoPages'



test('User should be singup',async({page,request,context})=>{
    const user=new User()

    const signuppage=new SignUPPage()
    await signuppage.load(page)

   await signuppage.signup(page,user)
    const todapage=new todoPages()
    const massage=await todapage.GetWelcomeMassageElement(page)
    console.log(massage)
    await expect(massage).toContain('Good')


})