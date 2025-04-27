import { useAuth } from "@/providers/AuthProvider";
import ChatProvider from "@/providers/ChatProvider";
import { Redirect, Slot, Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from "stream-chat-expo";

export const Screen = () => (
  <OverlayProvider>{/** App components */}</OverlayProvider>
);
const client = StreamChat.getInstance("6xj25ez66s8n");


export default function HomeLayout() {
    
    const {user} = useAuth();
    if(!user) {
        return <Redirect href="../(auth)" />
    }


    return (
                <ChatProvider>
                    <Stack>
                        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    
                    </Stack>
                </ChatProvider>
    );
}