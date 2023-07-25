/* eslint-disable no-useless-catch */
import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playersGetByGroup } from './playersGetByGroup'

export async function playerGetByGroupAndTeam(group:string, team:string) {
  try {
    const storage = await playersGetByGroup(group);

    const players: PlayerStorageDTO[] = storage.filter((player: { team: string; }) => player.team === team);

    return players;
  } catch (error) {
    throw (error);
  }
  
}