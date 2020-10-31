import React from 'react';
import {SafeAreaView, View, ScrollView, Text} from 'react-native';
import {useQuery} from '@apollo/client';

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
          {!loading &&
            groups.queryGroups.map(group => (
              <GroupItemView
                onTouch={() =>
                  navigation.navigate(Routes.ChatAreaView, {group})
                }
                key={group.id}
                info={group}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatbotView;
