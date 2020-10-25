import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useLazyQuery, useQuery} from '@apollo/client';

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
    return (
      <FavoritePlacesView
        navigation={navigation}
        data={loadingCountries ? [] : countries.queryCountry}
      />
    );
  };

  const renderTopCity = () => {
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
