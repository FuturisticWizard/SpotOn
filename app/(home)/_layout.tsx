import ChatProvider from "@/providers/ChatProvider";
import { Slot, Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from "stream-chat-expo";

export const Screen = () => (
  <OverlayProvider>{/** App components */}</OverlayProvider>
);
const client = StreamChat.getInstance("6xj25ez66s8n");


export default function HomeLayout() {
    

    return (
   
                <ChatProvider>
                    <Stack>
                        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    
                    </Stack>
                </ChatProvider>
    );
}