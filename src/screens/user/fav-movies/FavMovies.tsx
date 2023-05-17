import React from 'react';
import {View} from 'react-native';
import SwipeableList from '../../../components/swipeableList/SwipeableList';

const DATA = [
  {key: '1. element'},
  {key: '2. element'},
  {key: '3. element'},
  {key: '4. element'},
  {key: '5. element'},
  {key: '6. element'},
  {key: '7. element'},
  {key: '8. element'},
  {key: '9. element'},
  {key: '10. element'},
  {key: '11. element'},
  {key: '12. element'},
  {key: '13. element'},
];

export const FavMoviesScreen = () => {
  return (
    <View style={{flex: 1}}>
      <SwipeableList style={{flex: 1}} data={DATA} />
    </View>
  );
};
