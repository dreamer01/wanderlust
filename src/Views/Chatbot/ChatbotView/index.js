import React from 'react';
import {SafeAreaView, View, ScrollView, Text} from 'react-native';
import {useQuery} from '@apollo/client';
import ContentLoader, {Rect} from 'react-content-loader/native';

import {FETCH_GROUPS} from '../../../Utils/queries';
import Routes from '../../../Navigations/Routes';
import GroupItemView from '../GroupItemView';
import styles from './styles';

const ChatbotView = ({navigation}) => {
  const {data: groups, loading} = useQuery(FETCH_GROUPS);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        <Text style={styles.headerTitle}>Catch With Fellow Wanderer</Text>
        <View style={styles.groupContainer}>
          {loading ? (
            <View style={styles.loader}>
              <ContentLoader viewBox="0 0 380 300">
                <Rect x="5%" y="10" rx="4" ry="4" width="90%" height="40%" />
                <Rect x="5%" y="50%" rx="4" ry="4" width="90%" height="40%" />
                <Rect x="5%" y="10" rx="4" ry="4" width="90%" height="40%" />
                <Rect x="5%" y="50%" rx="4" ry="4" width="90%" height="40%" />
              </ContentLoader>
            </View>
          ) : (
            groups.queryGroups.map(group => (
              <GroupItemView
                onTouch={() =>
                  navigation.navigate(Routes.ChatAreaView, {group})
                }
                key={group.id}
                info={group}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatbotView;
