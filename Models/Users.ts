import { faker } from '@faker-js/faker'
export default class User{
//encapsulatio 
private firstname:string
private email:string
private lastname:string
private password:string
private confirmpassword:string
private accessToken:string 
private userID:string


constructor()
{
    this.firstname=faker.person.firstName()
    this.email=faker.internet.email()
    this.lastname=faker.person.lastName()
    this.password="Test12345"
    this.confirmpassword="Test12345"
}

getfirstname()
{
    return this.firstname
    
}

getemail()
{

    return this.email  
}
getlastname()
{

    return this.lastname  
}

getpassword()
{

    return  this.password 
}

getconfirmpassword()
{

    return  this.confirmpassword 
}
getaccessToken()
{

    return  this.accessToken
}

setAccesstoken(accessToken:string)
{
this.accessToken=accessToken

}
getuserID()
{

    return  this.userID
}

setUserID(userID:string)
{
this.userID=userID

}




}