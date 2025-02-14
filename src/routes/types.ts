import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Zustand: undefined;
  ZustandCart: undefined;
  MobX: undefined;
  MobXCart: undefined;
  Redux: undefined;
  ReduxCart: undefined;
  RTK: undefined;
  RTKCart: undefined;
  RTKQuery: undefined;
  RTKQueryCart: undefined;
  ContextAPI: undefined;
  ContextAPICart: undefined;
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
export type ReduxScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Redux'
>;
export type ReduxCartScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ReduxCart'
>;
export type RTKScreenProps = NativeStackScreenProps<RootStackParamList, 'RTK'>;
export type RTKCartScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'RTKCart'
>;
export type RTKQueryScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'RTKQuery'
>;
export type ContextAPIScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ContextAPI'
>;
export type ContextAPICartScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ContextAPICart'
>;
