

import UserLine from './UserLine';


import React from 'react'

export interface ViewProps {
    users: string[];
    addInputValue: string;
    onAddUser: (e: React.FormEvent<HTMLElement>) => void;
    onInputChange: (
      name: string
    ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRemoveUser: (name: string) => (e: React.FormEvent<HTMLElement>) => void;
  }

export default function HomeView(props:ViewProps) {
    const {
        users,
        onAddUser,
        onRemoveUser,
        addInputValue,
        onInputChange,
      } = props;
  
    return (
        <div className="home-page">
          <div className="content">
            <form onSubmit={onAddUser} className="user-add">
              <input
                data-testid="input.addInput"
                onChange={onInputChange('addInput')}
                value={addInputValue}
                placeholder="name"
                type="text"
              />
              <button
                data-testid="button.add"
                type="submit"
              >
                Add
              </button>
             
            </form>
  
            <div data-testid="list.users">
              {users.map((userName) => (
                <UserLine
                  onRemoveUser={onRemoveUser(userName)}
                  userName={userName}
                  key={userName}
                />
              ))}
            </div>
          </div>
        </div>
      );

}

