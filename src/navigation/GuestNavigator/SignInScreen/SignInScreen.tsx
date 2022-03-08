import React, {FC, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {BaseButton, InputField} from '../../../components';
import {Coin} from '../../../components/icon';
import {useAppDispatch} from '../../../hooks';
import {UserLoginRequest} from '../../../interfaces/user';
import {userActions} from '../../../store/user';
import Routes from '../../routes';
import {SignInScreenProps} from '../GuestNavigator';

const SignInScreen: FC<SignInScreenProps> = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const {signIn} = userActions;
  const {
    colors: {white},
  } = useTheme();
  const dispatch = useAppDispatch();
  const {control, handleSubmit, formState} = useForm<UserLoginRequest>({
    mode: 'onChange',
  });

  const goToSignUp = () => {
    navigation.navigate(Routes.SignUpScreen);
  };

  const submit = ({email, password}: UserLoginRequest) => {
    setLoading(true);
    dispatch(
      signIn({
        email: email.trim(),
        password: password.trim(),
      }),
    ).finally(() => {
      setLoading(false);
    });
  };

  return (
    <>
      <StatusBar backgroundColor={white} />
      <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Inner>
            <FormWrapper>
              <Icon />
              <Controller
                control={control}
                render={({field: {value, onChange}, fieldState: {error}}) => (
                  <InputField
                    label="E-mail:"
                    placeholder="Введите email"
                    error={error?.message}
                    value={value}
                    onChangeText={onChange}
                    editable={!isLoading}
                  />
                )}
                rules={{required: 'поле обязательно'}}
                name="email"
              />
              <Controller
                control={control}
                render={({field: {value, onChange}, fieldState: {error}}) => (
                  <InputField
                    label="Пароль:"
                    placeholder="Введите пароль"
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry
                    error={error?.message}
                    editable={!isLoading}
                  />
                )}
                rules={{required: 'поле обязательно'}}
                name="password"
              />
              <SubmitButton
                title="Войти"
                isLoading={isLoading}
                onPress={handleSubmit(submit)}
                disabled={!formState.isValid}
              />
            </FormWrapper>
            <Footer>
              <SignUpButton onPress={goToSignUp}>
                <StyledText>Зарегистрироваться</StyledText>
              </SignUpButton>
            </Footer>
          </Inner>
        </TouchableWithoutFeedback>
      </Container>
    </>
  );
};

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 30px;
  background-color: ${({theme: {colors}}) => colors.white};
`;

const Inner = styled.View`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
`;

const SubmitButton = styled(BaseButton)`
  margin-top: 30px;
  padding: 10px 0;
`;

const StyledText = styled.Text`
  text-align: center;
  font-size: 15px;
  color: ${({theme: {colors}}) => colors.black};
`;

const SignUpButton = styled.TouchableOpacity`
  padding: 7px;
  width: 70%;
`;

const Footer = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const FormWrapper = styled.View`
  flex-grow: 1;
  justify-content: center;
`;

const Icon = styled(Coin)`
  margin: 0 auto;
  margin-bottom: 20px;
`;

export default SignInScreen;
