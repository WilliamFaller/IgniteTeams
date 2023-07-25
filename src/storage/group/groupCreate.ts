/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage';

import { groupsGetAll } from './groupsGetAll'

import { GROUP_COLLECTION } from '@storage/storageConfig'
import { AppError } from '@utils/AppError';

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll();

    const groupAlreadyExists = storedGroups.includes(newGroup);

    if(groupAlreadyExists){
      throw new AppError('Esse grupo ja existe');
    }

    const storage = JSON.stringify([...storedGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}