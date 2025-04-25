import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Channel, ChannelList, Message, MessageInput, MessageList } from "stream-chat-expo";
import { Channel as ChannelType, StreamChat } from "stream-chat";
import { router } from "expo-router";

export default function MainTabScreen() {

    return (
        <ChannelList onSelect={(channel) => router.push(`/channel/${channel.cid}`)}/>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
