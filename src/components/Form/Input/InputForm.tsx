import React from "react";
import { Control, Controller } from 'react-hook-form'
import { TextInputProps, View } from "react-native";
import { Input } from "./Input";
import { Error } from "./styles";

interface InputFormProps extends TextInputProps {
    control: Control;
    name: string;
    error: string;
}

export function InputForm({
    name,
    control,
    error,
    ...rest
}: InputFormProps) {
    return (
        <View>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
            />
            {error && <Error>{error}</Error>}
        </View>
    )
}