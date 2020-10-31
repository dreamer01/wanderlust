import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useLazyQuery, useQuery} from '@apollo/client';
import ContentLoader, {Rect} from 'react-content-loader/native';

import I18n from '../../../localization/i18n';
import {Icons} from '../../../Constants/Assets';
import {
  FETCH_CONTINENTS,
  FETCH_COUNTRIES,
  FETCH_CONTINENT_CITIES,
} from '../../../Utils/queries';
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView';
import CountryCollectionView from '../../../Components/CountryCollectionView';
import TitleNavigationHeader from '../../../Components/navigation-header/TitleNavigationHeader';
import FavoritePlacesView from '../../../Components/FavoritePlacesView';
import PlaceCollectionView from '../../../Components/PlaceCollectionView';
import BlogsView from '../../../Components/BlogsView';
import SearchBarView from '../../../Components/SearchBarView';

import styles from './styles';

// TODO: Skeleton Loaders
const TravelFeedView = ({navigation}) => {
  const [showSearchBar, toggleSearch] = useState(false);
  const [continent, setContinent] = useState('Asia');
  const [searchText, setSearchText] = useState('');
  const searchTextField = useRef(null);
  const {data: continents, loading: loadingContinents} = useQuery(
    FETCH_CONTINENTS,
  );

  const {data: countries, loading: loadingCountries} = useQuery(
    FETCH_COUNTRIES,
  );

  const [
    fetchContinentCities,
    {data: cities, called, loading: loadingCities},
  ] = useLazyQuery(FETCH_CONTINENT_CITIES, {variables: {continent}});

  useEffect(() => {
    fetchContinentCities();
  }, [continent]);

  // TODO: Open Search in modal with country tabs
  const onClickRightButton = () => {
    toggleSearch(v => !v);
    // setState(
    //   {showSearchBar: !state.showSearchBar, searchText: ''},
    //   () => {
    //     if (searchTextField != null) {
    //       searchTextField.focus();
    //     }
    //   },
    // );
  };

  const onChangeText = ({text}) => setSearchText(text);

  const renderMiddleView = () => {
    return (
      <View style={styles.middleView}>
        {showSearchBar && renderSearchBar()}
        {renderFavoritePlaces()}
        {renderCountryCollectionView()}
        {renderTopCity()}
        {renderBlogView()}
      </View>
    );
  };

  const renderSearchBar = () => {
    return (
      <SearchBarView
        ref={searchTextField}
        title={I18n.t('travel05')}
        searchText={searchText}
        onChangeText={onChangeText}
      />
    );
  };

  const renderCountryCollectionView = () => {
    return (
      <CountryCollectionView
        data={loadingContinents ? [] : continents.__type.enumValues}
        onTouch={item => setContinent(item.name)}
      />
    );
  };

  const renderFavoritePlaces = () => {
    if (loadingCountries) {
      return (
        <View style={styles.favtItem}>
          <ContentLoader viewBox="0 0 380 150">
            <Rect x="5%" y="5%" rx="4" ry="4" width="90%" height="90%" />
          </ContentLoader>
        </View>
      );
    }

    return (
      <FavoritePlacesView
        navigation={navigation}
        data={loadingCountries ? [] : countries.queryCountry}
      />
    );
  };

  const renderTopCity = () => {
    if (loadingCities) {
      return (
        <View style={styles.cities}>
          <ContentLoader viewBox="0 0 380 80">
            <Rect x="5%" y="5%" rx="4" ry="4" width="20%" height="90%" />
            <Rect x="30%" y="5%" rx="4" ry="4" width="20%" height="90%" />
            <Rect x="55%" y="5%" rx="4" ry="4" width="20%" height="90%" />
            <Rect x="80%" y="5%" rx="4" ry="4" width="20%" height="90%" />
          </ContentLoader>
        </View>
      );
    }
    return (
      <PlaceCollectionView
        navigation={navigation}
        data={
          called
            ? loadingCities
              ? []
              : cities.queryCountry.reduce(
                  (cities, c) => [...cities, ...c.cities],
                  [],
                )
            : []
        }
        headerTitle={I18n.t('travel03')}
      />
    );
  };

  const renderBlogView = () => {
    if (loadingCities) {
      return (
        <View style={styles.favtItem}>
          <ContentLoader viewBox="0 0 380 150">
            <Rect x="5%" y="5%" rx="4" ry="4" width="90%" height="90%" />
          </ContentLoader>
        </View>
      );
    }
    return (
      <BlogsView
        data={
          called
            ? loadingCities
              ? []
              : cities.queryCountry.reduce(
                  (cities, c) => [...cities, ...c.cities],
                  [],
                )
            : []
        }
        navigation={navigation}
        headerTitle={I18n.t('travel04')}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleNavigationHeader
        navigation={navigation}
        title={I18n.t('travel02')}
        showRightButton
        rightButtonIcon={Icons.search}
        onClickRightButton={onClickRightButton}
      />
      <ManageKeyboardScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={styles.keyboardAvoidView}>
        {renderMiddleView()}
      </ManageKeyboardScrollView>
    </SafeAreaView>
  );
};
export default TravelFeedView;
