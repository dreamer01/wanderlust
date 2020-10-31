import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useQuery} from '@apollo/client';

import ContentLoader, {Rect} from 'react-content-loader/native';
import I18n from '../../../localization/i18n';
import {FETCH_HOTELS} from '../../../Utils/queries';
import {Icons} from '../../../Constants/Assets';
import {Places} from '../../../Constants/Constants';
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView';
import SearchBarView from '../../../Components/SearchBarView';
import TitleNavigationHeader from '../../../Components/navigation-header/TitleNavigationHeader';
import PlaceCollectionView from '../../../Components/PlaceCollectionView';
import styles from './styles';
import OfferCollectionView from '../../../Components/OfferCollectionView';
import Routes from '../../../Navigations/Routes';
import HotelView from '../HotelView';

const HotelsFeedView = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const {data: hotels, loading: loadingHotels} = useQuery(FETCH_HOTELS);

  const onClickRightButton = () => {
    navigation.navigate(Routes.HotelDetailsView);
  };

  const onChangeText = ({text}) => setSearchText(text);

  const renderMiddleView = () => {
    return (
      <View style={styles.middleView}>
        {renderSearchBar()}
        {/* {renderPopularDestination()} */}
        {renderOfferCollectionView()}
        {renderTopHotels()}
      </View>
    );
  };

  const renderSearchBar = () => {
    return (
      <SearchBarView
        title={I18n.t('hotels02')}
        searchText={searchText}
        onChangeText={onChangeText}
      />
    );
  };

  const renderPopularDestination = () => {
    return (
      <PlaceCollectionView
        navigation={navigation}
        data={Places}
        headerTitle={I18n.t('hotels03')}
      />
    );
  };

  const renderOfferCollectionView = () => {
    return (
      <OfferCollectionView
        data={Places}
        navigation={navigation}
        headerTitle={I18n.t('hotels04')}
      />
    );
  };

  const renderTopHotels = () => {
    if (loadingHotels) {
        return (
          <View style={styles.favtItem}>
            <ContentLoader viewBox="0 0 380 300">
              <Rect x="5%" y="10" rx="4" ry="4" width="90%" height="40%" />
              <Rect x="5%" y="50%" rx="4" ry="4" width="90%" height="40%" />
            </ContentLoader>
          </View>
        );
    }
    return hotels.queryHotel.map(hotel => (
      <HotelView
        key={hotel.id}
        info={hotel}
        onTouch={() => navigation.navigate(Routes.HotelDetailsView, { info: hotel })}
      />
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleNavigationHeader
        navigation={navigation}
        title={I18n.t('hotels01')}
        showRightButton
      />
      <ManageKeyboardScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={styles.keyboardAvoidView}>
        {renderMiddleView()}
      </ManageKeyboardScrollView>
    </SafeAreaView>
  );
};
export default HotelsFeedView;
