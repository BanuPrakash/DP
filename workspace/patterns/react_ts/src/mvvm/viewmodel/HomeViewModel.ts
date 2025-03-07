import UsersModel from "../model/UsersModel";

export default class HomeViewModel {
    private usersModel: UsersModel;
  
    constructor(users: UsersModel) {
      this.usersModel = users;
    }
  
    public addUser(value: string) {
      this.usersModel.addUser(value);
    }
  
    public removeUser(value: string) {
      this.usersModel.removeUser(value);
    }
  
    public removeAllUsers() {
      this.usersModel.clearAll();
    }
  
    public get userList(): string[] {
      return this.usersModel.users;
    }
  
  }
  