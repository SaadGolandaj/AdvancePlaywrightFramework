import { Page } from "@playwright/test";

export default class todoPage{

    private get welcomemassage()
    {

        return "[data-testid=welcome]"
    }

   GetWelcomeMassageElement(page:Page)
   {
       return page.locator(this.welcomemassage).textContent()

   }
   private get todoitem()
    {

        return "[data-testid=todo-text]"
    }


    async GetTodoItemName(page:Page){

        return page.locator(this.todoitem).textContent()
    }

    private get deletetodoitem()
    {

        return "[data-testid=delete]"
    }
   
    async load (page:Page){

        await page.goto("/todo")
    }

    async createtodo(page:Page,item:string)
    {
    await page.locator("[data-testid=add]").click()
    await page.locator("[data-testid=new-todo]").fill(item)
    await page.locator("[data-testid=submit-newTask]").click()
    }

    async Deletetodo(page:Page)
    {

        await page.locator("[data-testid=delete]").click()
    }

    private get Notodomassage()
    {

     return '[data-testid=no-todos]'
    }
    
    async getNotodomassage(page:Page)
    {
    return page.locator(this.Notodomassage).textContent()

    }








}