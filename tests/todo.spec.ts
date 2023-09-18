import{test,expect} from '@playwright/test'
import { faker } from '@faker-js/faker'
import Users from '../Models/Users'
import UserApi from '../Api/UserApi'
import todoapi from '../Api/todoapi'
import SignUPPage from '../pages/SignUppage'
import todoPages from '../pages/todoPages'


const user=new Users()
const todopage=new todoPages()

test('User should be create todo list',async ({page,request,context})=>
{

    const signuppage=new SignUPPage()
    signuppage.Signupbyapi(request,user,context)
    
    await todopage.load(page)
   
    await todopage.createtodo(page,'mylearning')
   
    await page.waitForTimeout(2000)
    const todoitem1=await todopage.GetTodoItemName(page)
    expect(await todoitem1).toEqual("mylearning")
  

})
test('User should be delete the todo', async ({page,request,context})=>
{
    
    const signuppage=new SignUPPage()
    await signuppage.Signupbyapi(request,user,context)

    await new todoapi().addtodo(request,user)
   
    await todopage.load(page)
    todopage.Deletetodo(page)
   
    const notodomassage=await todopage.getNotodomassage(page)
    expect(await notodomassage).toEqual("No Available Todos")



})