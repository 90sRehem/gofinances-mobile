
import AsyncStorage from "@react-native-async-storage/async-storage"

import { STORAGE_PREFIX } from "../config"

type GetStorageItem = {
    key: string;
}

type SetStorageItem = {
    key: string;
    values: Record<string, any>
}

type ClearStorageItem = {
    key: string;
}


export const storage = {
    getItem: async ({ key }: GetStorageItem) => {
        try {
            const result = await AsyncStorage.getItem(`${STORAGE_PREFIX}${key}`)
            const parsedResult = JSON.parse(result!)

            return parsedResult
        } catch (error) {
            console.log(error);
        }

    },
    setItem: async ({ key, values }: SetStorageItem) => {
        try {
            const result = await AsyncStorage.getItem(`${STORAGE_PREFIX}${key}`)

            const previousValues = result ? JSON.parse(result) : []

            const formattedData = [
                ...previousValues,
                values
            ]

            await AsyncStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(formattedData))
        } catch (error) {
            console.log(error);
        }
    },
    removeItem: async ({ key }: ClearStorageItem) => {
        try {
            await AsyncStorage.removeItem(`${STORAGE_PREFIX}${key}`)
        } catch (error) {
            console.log(error);
        }
    }
}