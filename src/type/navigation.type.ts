import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NAME_NAVIGATION} from '../common/enum';
import {RouteProp} from '@react-navigation/native';

export type RootParams = {
  Home: undefined;
  Detail: undefined;
};

export type PropStackDetail = NativeStackNavigationProp<
  RootParams,
  NAME_NAVIGATION.DETAIL
>;

export type PropRouteDetail = RouteProp<RootParams, NAME_NAVIGATION.DETAIL>;
