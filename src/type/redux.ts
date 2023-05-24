import { Restaurant } from "./response";

export interface RootStore {
  resto: RestoState;
}

export interface RestoState {
  message: string;
  count: number;
  loading: boolean;
  restaurant: Restaurant[];
  detail: Restaurant
}
