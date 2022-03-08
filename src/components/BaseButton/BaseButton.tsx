import React, {FC} from 'react';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import styled, {useTheme} from 'styled-components/native';

interface BaseButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

const BaseButton: FC<BaseButtonProps> = ({
  title,
  isLoading = false,
  disabled,
  ...otherProps
}) => {
  const {
    colors: {white},
  } = useTheme();
  return (
    <StyledButton disabled={disabled || isLoading} {...otherProps}>
      {isLoading ? (
        <ActivityIndicator color={white} />
      ) : (
        <StyledText $disabled={disabled}>{title}</StyledText>
      )}
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity`
  background-color: ${({theme: {colors}}) => colors.black};
  padding: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({theme: {colors}}) => colors.black};
`;

const StyledText = styled.Text<{$disabled: boolean | null | undefined}>`
  font-size: 15px;
  text-align: center;
  color: ${({theme: {colors}}) => colors.white};
  ${({$disabled}) => $disabled && 'opacity: 0.5;'}
`;

export default BaseButton;
