import React from 'react'
export interface ViewUserLineProps {
    userName: string;
    onRemoveUser: (e: React.FormEvent<HTMLElement>) => void;
  }

export default function UserLine(props: ViewUserLineProps) {
    const { onRemoveUser, userName } = props;
    return (
        <form
          data-testid={`list.users[${userName}]`}
          onSubmit={onRemoveUser}
          className="user-line"
        >
          <span>Name: {userName}</span>
          <button type="submit">Delete</button>
        </form>
      );
}
