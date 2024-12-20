import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Zustand: undefined;
  ZustandCart: undefined;
  MobX: undefined;
  MobXCart: undefined;
  RTK: undefined;
  RTKCart: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type ZustandScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Zustand'
>;
export type ZustandCartScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ZustandCart'
>;
export type MobXScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MobX'
>;
export type MobXCartScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MobXCart'
>;
export type RTKScreenProps = NativeStackScreenProps<RootStackParamList, 'RTK'>;
export type RTKCartScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'RTKCart'
>;
