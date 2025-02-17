import { StyleSheet, Text, View } from "react-native";

export default function MainTabScreen() {
    return (
        <View style={styles.container}>
              <Text>Main Tab</Text>
        </View>
      
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
