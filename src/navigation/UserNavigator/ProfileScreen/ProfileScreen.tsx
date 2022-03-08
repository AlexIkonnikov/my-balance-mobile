import React, {FC} from 'react';
import styled, {css} from 'styled-components/native';
import {BaseButton, InputField} from '../../../components';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {userActions, userSelectors} from '../../../store/user';

const ProfileScreen: FC = () => {
  const dispatch = useAppDispatch();
  const {logOut} = userActions;
  const {surname, email, patronymic, name} = useAppSelector(
    userSelectors.selectUser,
  );

  const exit = () => {
    dispatch(logOut());
  };

  return (
    <Contaner>
      <InputField
        inputCSS={inputCSS}
        label="Фамилия:"
        value={surname}
        editable={false}
      />
      <InputField
        inputCSS={inputCSS}
        label="Имя:"
        value={name}
        editable={false}
      />
      <InputField
        inputCSS={inputCSS}
        label="Отчество:"
        value={patronymic}
        editable={false}
      />
      <InputField
        inputCSS={inputCSS}
        label="Email:"
        value={email}
        editable={false}
      />
      <BaseButton title="Выход" onPress={exit} />
    </Contaner>
  );
};

const Contaner = styled.View`
  flex-grow: 1;
  padding: 20px;
`;

const inputCSS = css`
  border-width: 0px;
  border-bottom-width: 1px;
  color: ${({theme: {colors}}) => colors.black};
`;

export default ProfileScreen;
