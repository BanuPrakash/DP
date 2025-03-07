import { inject } from 'mobx-react';
import { Component } from 'react';

import Models from '../model/Store'
import HomeViewModel from '../viewmodel/HomeViewModel';
import UsersModel from '../model/UsersModel';
import HomeController from '../controller/HomeController';

@inject(Models.type.USERS_MODEL)
export default class Home extends Component {
  private viewModel: HomeViewModel;

  constructor(props: any) {
    super(props);

    /**
     * Get the instance for each model that you use on the view-model
     */
    const userModel: UsersModel = props[Models.type.USERS_MODEL];

    /**
     * Pass the view-models as parameters to the contructor of ViewModel
     * that you use
     */
    this.viewModel = new HomeViewModel(userModel);
  }

  render() {
    /**
     * On render return the Controller with the viewModel so it
     * can be used
     */
    return <HomeController viewModel={this.viewModel} />;
  }
}
