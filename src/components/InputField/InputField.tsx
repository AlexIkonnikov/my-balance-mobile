import React, {FC} from 'react';
import {TextInputProps} from 'react-native';
import {CSSProp} from 'styled-components';
import styled, {useTheme} from 'styled-components/native';

interface InputFieldProps extends TextInputProps {
  label?: string;
  error?: string;
  inputCSS?: CSSProp;
}

const InputField: FC<InputFieldProps> = ({
  label,
  error,
  style,
  inputCSS,
  ...otherProps
}) => {
  const {
    colors: {gray},
  } = useTheme();
  return (
    <Wrapper style={style}>
      {label && <Label $isValid={!error}>{label}</Label>}
      <StyledInput
        $isValid={!error}
        $inputCSS={inputCSS}
        placeholderTextColor={gray}
        {...otherProps}
      />
      <ErrorText $isValid={!error}>{error || ' '}</ErrorText>
    </Wrapper>
  );
};

const StyledInput = styled.TextInput<{
  $isValid: Boolean;
  $inputCSS?: CSSProp;
}>`
  padding: 7px 15px;
  border-radius: 10px;
  border-width: 1px;
  ${({$isValid, theme: {colors}}) =>
    `border-color: ${$isValid ? colors.black : colors.red};`}
  ${({$inputCSS}) => $inputCSS}
`;

const Label = styled.Text<{$isValid: boolean}>`
  font-size: 14px;
  color: ${({theme: {colors}}) => colors.black};
  margin-bottom: 5px;
  ${({$isValid, theme: {colors}}) =>
    `color: ${$isValid ? colors.black : colors.red}`}
`;

const Wrapper = styled.View`
  display: flex;
`;

const ErrorText = styled(Label)`
  font-size: 12px;
  line-height: 12px;
  margin-top: 5px;
  color: ${({theme: {colors}}) => colors.red};
`;

export default InputField;
