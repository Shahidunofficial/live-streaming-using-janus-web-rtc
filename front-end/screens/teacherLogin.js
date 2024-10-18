import React, { useState, useContext } from "react";
import { View, Text, Button, Alert, ActivityIndicator } from "react-native";
import InputBox from "../components/inputBox";
import { AuthContext } from "../context/authContext"; // Assuming this is the correct path for your AuthContext
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"; // Make sure you have axios installed
import { useNavigation } from "@react-navigation/native"; // Assuming React Navigation is used

export default function TeacherLogin({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useContext(AuthContext); // Access the signIn function from AuthContext
  // Hook for navigation

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Please Fill All Fields");
        setLoading(false);
        return;
      }
      // Make the API call
      const { data } = await axios.post("/auth/login", { email, password });
      
      // Assuming data contains a token and role, adjust if different
      setLoading(false);
      signIn(data.token, data.role); // Update the context with the token and role

      // Save the auth data to AsyncStorage
      await AsyncStorage.setItem("@auth", JSON.stringify(data));
      
      // Navigate to Home screen
      navigation.navigate("Home");

      alert(data.message);
      console.log("Login Data==> ", { email, password });
    } catch (error) {
      alert(error.response?.data?.message || "Login failed, please try again.");
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Teacher's Login</Text>
      <View>
        <InputBox
          inputTitle={"Email"}
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          setValue={setEmail}
        />
        <InputBox
          inputTitle={"Password"}
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Login" onPress={handleSubmit} />
      )}
    </View>
  );
}
