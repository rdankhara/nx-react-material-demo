import { atom } from 'recoil';

export interface Tile {
  title: string;
  canResize?: boolean;
  isVisible?: boolean;
}

export interface AppState {
  active?: string;
  user?: string;
  isAuthenticated?: string;
  apps: Tile[]
}

export interface ControlPoint {
  name: string;
  currency: string;
  category: string;
  description: string;
}

export interface ControlPointState extends Tile {
  items: ControlPoint[];
}

export const createDefaultControlPoint = (): ControlPointState => {
  return {
    title: 'Control Point List', items: [
      {name: 'name1', currency: 'USD', category: 'CAT1', description: 'desc1'},
      {name: 'name2', currency: 'GBP', category: 'CAT1', description: 'desc2'},
      {name: 'name3', currency: 'AUD', category: 'CAT1', description: 'desc3'},
    ]};
}

export interface CreateControlPointState extends Tile, ControlPoint{

}

export const createDefaultCreateControlPoint = (): CreateControlPointState => {
  return {
    title: 'CreateControlPoint',
    name: '',
    currency: '',
    category: '',
    description: ''
  }
}

const createDefaultAppState = (): AppState => {
  return {
    apps: [
    ]
  }
}

export const AppAtom = atom({
  key: 'AppAtom',
  default: createDefaultAppState()
})
