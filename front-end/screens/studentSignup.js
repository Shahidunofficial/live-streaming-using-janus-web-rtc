import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import InputBox from "./InputBox"; // Assuming InputBox is in the same directory

const StudentSignup = () => {
  // Define state for each form field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");
  const [age, setAge] = useState("");
  const [loading,setLoading]=useState("false");
  const [role,setrole] =useState("student");
  const [contactnum, setContactnum] = useState("");
  const [birthDate, setBirthDate] = useState("");

  // Handle form submission
  const handleSubmit = async () => {
    // Basic validation logic
   

    // Additional validation can be added for nic, email, etc.
    // Submit the form data
    

    // Here you would usually send this data to the backend
    try {
      setLoading(true);
      if (!name || !email || !nic || !age || !contactnum || !birthDate) {
        alert("Please fill all fields");
        return;
      }
      setLoading(false);
      const formData = {
        name,
        email,
        nic,
        age,
        contactnum,
        birthDate,
      };
      const reponse= await axios.post('/student/studentSignup',formData);

      navigation.navigate("StudentLogin");
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
    console.log("Student Signup Data: ", formData);
    alert("Student registered successfully!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Signup Form</Text>

      <InputBox
        inputTitle="Full Name"
        value={name}
        setValue={setName}
        keyboardType="default"
        autoComplete="name"
      />

      <InputBox
        inputTitle="Email"
        value={email}
        setValue={setEmail}
        keyboardType="email-address"
        autoComplete="email"
      />

      <InputBox
        inputTitle="NIC (e.g., 123456789V or 123456789012)"
        value={nic}
        setValue={setNic}
        keyboardType="default"
        autoComplete="off"
      />

      <InputBox
        inputTitle="Age"
        value={age}
        setValue={setAge}
        keyboardType="numeric"
        autoComplete="off"
      />

      <InputBox
        inputTitle="Contact Number"
        value={contactnum}
        setValue={setContactnum}
        keyboardType="phone-pad"
        autoComplete="tel"
      />

      <InputBox
        inputTitle="Birth Date (YYYY-MM-DD)"
        value={birthDate}
        setValue={setBirthDate}
        keyboardType="default"
        autoComplete="birthdate-full"
      />

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f2f2f2",
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StudentSignup;
