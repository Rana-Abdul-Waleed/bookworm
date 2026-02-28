import { View, Text, TouchableOpacity } from "react-native";
import { useAuthStore } from "../../store/authStore.js";

export default function Profile() {
  const { token, logout } = useAuthStore();

  return (
    <View>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
