import { makeAutoObservable } from 'mobx';

export default class UsersModel {

  private names: string[] = ['Banu Prakash'];
 
  constructor() {
    makeAutoObservable(this);
  }

  public addUser(name: string) {
    this.names = [...this.names, name];
  }

  public removeUser(name: string) {
    this.names = this.names.filter((userName) => userName !== name);
  }

  public clearAll() {
    this.names = [];
  }

  public get users(): string[] {
    return this.names;
  }

}
