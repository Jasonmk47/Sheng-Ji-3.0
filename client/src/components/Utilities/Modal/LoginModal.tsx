import * as React from 'react';
import { css } from 'glamor';

import { Button } from '../Buttons/Button';
import {} from 'types/mutationTypes';
import {} from 'types/routeTypes';

export const LoginModal = React.memo(
  ({ toggleModalClose, switchToCreate }: IProps) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
      <div className={contentsCss.toString()}>
        <div className={modalSectionCss.toString()}>
          <div>
            <Button
              onClick={async () => {
                switchToCreate();
              }}
              text={'Create User'}
            />
          </div>
        </div>
        <div className={modalSectionCss.toString()}>
          <h3>Username</h3>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.currentTarget.value)}
          ></input>
        </div>
        <div className={modalSectionCss.toString()}>
          <h3>Password</h3>
          <input
            type="text"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          ></input>
        </div>

        <Button
          isDisabled={username === '' || password === ''}
          onClick={async () => {
            // Login

            toggleModalClose();

            // Set login token
          }}
          text={'Login'}
        />
      </div>
    );
  },
);

interface IProps {
  toggleModalClose(): void;
  switchToCreate(): void;
}

const contentsCss = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const modalSectionCss = css({
  display: 'flex',
  flexDirection: 'column',
  margin: '15px',
  justifyContent: 'center',
  alignItems: 'center',
});