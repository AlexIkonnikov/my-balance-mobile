import React, { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Platform, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { BaseButton, InputField } from 'components';
import { useAppDispatch } from 'hooks';
import { UserCreateRequest } from 'interfaces/user';
import { userActions } from 'store/user';
import Routes from 'navigation/routes';
import { SignUpScreenProps } from '../GuestNavigator';

const SignUpScreen: FC<SignUpScreenProps> = ({ navigation }) => {
  const { signUp } = userActions;
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<UserCreateRequest>();

  const submit = (data: UserCreateRequest) => {
    dispatch(signUp(data));
  };

  const goToSignIn = () => {
    navigation.navigate(Routes.SignInScreen);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Title>Регистрация</Title>
        <Scroll showsVerticalScrollIndicator={false} contentContainerStyle={styles.pv10}>
          <Inner behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Controller
              control={control}
              name="surname"
              render={({ field: { value, onChange } }) => (
                <InputField label="Фамилия:" value={value} onChangeText={onChange} />
              )}
            />
            <Controller
              control={control}
              name="name"
              render={({ field: { value, onChange } }) => (
                <InputField label="Имя:" value={value} onChangeText={onChange} />
              )}
            />
            <Controller
              control={control}
              name="patronymic"
              render={({ field: { value, onChange } }) => (
                <InputField label="Отчество:" value={value} onChangeText={onChange} />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { value, onChange } }) => (
                <InputField label="Email:" value={value} onChangeText={onChange} />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { value, onChange } }) => (
                <InputField label="Пароль:" value={value} onChangeText={onChange} secureTextEntry />
              )}
            />
            <SubmitButton title="Зарегистрироваться" onPress={handleSubmit(submit)} />
          </Inner>
        </Scroll>

        <Footer>
          <TouchableOpacity onPress={goToSignIn}>
            <StyledText>Уже есть аккаунт?</StyledText>
            <SignInText>Войти</SignInText>
          </TouchableOpacity>
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  pv10: { paddingVertical: 10 },
});

const Container = styled.View`
  padding: 30px 30px;
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

const Title = styled.Text`
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.black};
`;

const Scroll = styled.ScrollView`
  flex: 1;
`;

const Inner = styled.KeyboardAvoidingView``;

const StyledText = styled.Text`
  text-align: center;
  color: ${({ theme: { colors } }) => colors.black};
  font-size: 15px;
`;

const SignInText = styled(StyledText)`
  font-weight: bold;
`;

const Footer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const SubmitButton = styled(BaseButton)`
  margin-top: 20px;
`;

export default SignUpScreen;
