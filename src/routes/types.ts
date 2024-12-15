import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Zustand: undefined;
  MobX: undefined;
  RTK: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type ZustandScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Zustand'
>;
export type MobXScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MobX'
>;
export type RTKScreenProps = NativeStackScreenProps<RootStackParamList, 'RTK'>;
