import React, {useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import {useMutation, useSubscription} from '@apollo/client';

import {useUser} from '../../../Utils/userContext';
import {GROUP_MESSAGES} from '../../../Utils/subscriptions';
import {SEND_MESSAGE} from '../../../Utils/mutations';
import {Color} from '../../../Constants/Colors';
import {Icons} from '../../../Constants/Assets';
import TitleNavigationHeader from '../../../Components/navigation-header/TitleNavigationHeader';
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView';
import styles from './styles';

const ChatAreaView = ({navigation}) => {
  const [message, setMessage] = useState('');
  const [user] = useUser();
  const group = navigation.state.params.group;
  const {data, loading} = useSubscription(GROUP_MESSAGES, {
    variables: {groupId: [group && group.id]},
  });

  const [sendMessage] = useMutation(SEND_MESSAGE, {
    variables: {user: user.email, groupId: group.id, message, time: new Date()},
    onCompleted: () => setMessage(''),
  });

  const renderMessage = ({item: message}) => {
    const isSelf = user.email === message.user.email;
    return (
      <View style={[styles.message, isSelf && styles.selfMessage]}>
        {!isSelf && <Text style={styles.authorStyle}>{message.user.name}</Text>}
        <Text style={styles.textStyle}>{message.text}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleNavigationHeader
        navigation={navigation}
        title={group.name}
        showBackButton
      />

      <ManageKeyboardScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={styles.keyboardAvoidView}>
        <ScrollView style={styles.messageArea}>
          {!data && <Text>Loading...</Text>}
          {data && (
            <FlatList
              data={data.queryGroups[0].messages.reverse()}
              renderItem={renderMessage}
              keyExtractor={item => `${item.id}`}
              ListFooterComponent={<Text></Text>}
            />
          )}
        </ScrollView>
        <View style={styles.chatInput}>
          <TextInput
            underlineColorAndroid={'transparent'}
            placeholder={'Type something...'}
            autoCapitalize={'sentences'}
            returnKeyType={'send'}
            style={styles.inputViewStyle}
            value={message}
            onSubmitEditing={() => {
              sendMessage();
            }}
            onChangeText={text => setMessage(text)}
          />
          <TouchableHighlight
            onPress={() => sendMessage()}
            underlayColor={Color.themeBackground}
            style={styles.backIconStyle}>
            <Image source={Icons.back} />
          </TouchableHighlight>
        </View>
      </ManageKeyboardScrollView>
    </SafeAreaView>
  );
};

export default ChatAreaView;
