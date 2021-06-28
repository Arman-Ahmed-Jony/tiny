import {Person, Admin} from './main'

const user = new Person("arman", "ahmed", "male")
user.getFullName()
console.log(user.getInfo());

const admin = new Admin('halima','sultan', 'female')
admin.setEditor('edits others scripts')
console.log(admin.getInfo());