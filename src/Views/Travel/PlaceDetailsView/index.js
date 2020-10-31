import React from 'react';
import {SafeAreaView, Image, Text, View} from 'react-native';
import AppButton from '../../../Components/base-componets/AppButton';
import {useMutation, useQuery} from '@apollo/client';

import {CITY_VISITED} from '../../../Utils/queries';
import {ADD_VISITOR} from '../../../Utils/mutations';
import {useUser} from '../../../Utils/userContext';
import BaseNavigationHeader from '../../../Components/navigation-header/BaseNavigationHeader';
import {Icons} from '../../../Constants/Assets';
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView';

import styles from './styles';

const PlaceDetailsView = ({navigation}) => {
  const info = navigation.state.params.info;
  const [user] = useUser();

  const {data, loading: loadingVisited} = useQuery(CITY_VISITED, {
    variables: {userEmail: user.email},
  });

  const [addToVisited, {loading: adding}] = useMutation(ADD_VISITOR, {
    variables: {cityName: info.name, email: user.email},
    refetchQueries: [{query: CITY_VISITED, variables: {userEmail: user.email}}],
    onCompleted: () => {},
  });

  return (
    <SafeAreaView style={styles.container}>
      <BaseNavigationHeader navigation={navigation} title={info.name} />
      <ManageKeyboardScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={styles.keyboardAvoidView}>
        <Image
          source={{uri: info.cover}}
          resizeMode={'cover'}
          resizeMethod={'resize'}
          style={styles.imageDetails}
        />
        <View style={styles.nameLocation}>
          <Image source={Icons.location} style={styles.location} />
          <Text style={styles.city}>{info.country.name}</Text>
        </View>
        <Text style={styles.des}>{info.description}</Text>
        {loadingVisited || adding ? (
          <Text style={styles.visited}>Loading...</Text>
        ) : data.getUser.visited.filter(({name}) => name === info.name).length >
          0 ? (
          // 🚀
          <Text style={styles.visited}>Visited ⛳</Text>
        ) : (
          <AppButton
            title="Add to Visited"
            onTouch={addToVisited}
            styles={styles.addVisitorBtn}
            textStyles={styles.signInButtonTextStyle}
          />
        )}
      </ManageKeyboardScrollView>
    </SafeAreaView>
  );
};

export default PlaceDetailsView;
