//Object constructor
function User(firstName,LastName,Avatar) {
  this.firstName=firstName;
  this.LastName=LastName;
  this.Avatar=Avatar;  
  this.getName=function () {
    return  `${this.firstName} ${this.LastName}`
  }
}
User..clasName='F8'
var author=new User('Son','Dang','Avatar');
var user=new User('Vu','Nguyrn','Avatar');
author.title="chia se dao tai f8";
user.comment="lieu co khoa hc";
console.log(author.getName());
console.log(user.getName());