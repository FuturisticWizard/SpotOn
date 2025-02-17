import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

export default function TabsNavigator() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{title: "Chats", tabBarIcon: ({size, color}) => <Entypo name="message" size={size} color={color} />}} />
            <Tabs.Screen name="profile" options={{title: "Profile", tabBarIcon: ({size, color}) => <FontAwesome name="user" size={size} color={color} />}} />
        </Tabs>
    )
}