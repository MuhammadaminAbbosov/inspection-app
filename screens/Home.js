import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import { Formik } from "formik";
import * as yup from "yup";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [verify, setVerify] = useState(false);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnMount={true}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, values, touched, errors, isValid }) => (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Authorization</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={[
                {
                  borderColor: errors.email && touched.email ? "red" : "#5555",
                },
                styles.input,
              ]}
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && touched.email && (
              <Text
                style={{
                  color: "red",
                  fontSize: 12,
                }}
              >
                {errors.email}
              </Text>
            )}

            <Text style={[styles.inputLabel, { marginTop: 12 }]}>Password</Text>
            <View style={{ position: "relative", flexDirection: "row" }}>
              <TextInput
                style={[
                  {
                    borderColor:
                      errors.password && touched.password ? "red" : "#5555",
                  },
                  styles.input,
                ]}
                placeholder="Password"
                secureTextEntry={showPassword}
                autoCapitalize="none"
                keyboardType="default"
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <View style={{ position: "absolute", right: 10, top: 20 }}>
                <Icon
                  name={showPassword ? "eye-off" : "eye"}
                  type="ionicon"
                  color={showPassword ? "#5555" : "#555"}
                  size={25}
                  style={{ zIndex: 100 }}
                  onPress={() => setShowPassword(!showPassword)}
                />
              </View>
            </View>
            {errors.password && touched.password && (
              <Text
                style={{
                  color: "red",
                  fontSize: 12,
                }}
              >
                {errors.password}
              </Text>
            )}

            <Text style={styles.forgotPassword}>I forgot password</Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: !isValid ? "#E5E5E5" : "black",
                },
              ]}
              disabled={!isValid}
              onPress={() => {
                navigation.navigate("GetStart");
              }}
            >
              <Text
                style={[
                  styles.text,
                  {
                    color: !isValid ? "#5555" : "#fff",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: loading ? 11 : 0,
                  },
                ]}
              >
                {loading ? (
                  <View>
                    <ActivityIndicator size="large" color="white" />
                  </View>
                ) : (
                  "Log in"
                )}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 120,
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: "700",
    fontSize: 32,
    color: "#282828",
    marginBottom: 55,
  },
  inputLabel: {
    fontSize: 14,
    letterSpacing: 0.2,
    fontWeight: "400",
    color: "#959595",
    marginBottom: 7,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 17,
    backgroundColor: "#F2F4F5",
    fontSize: 16,
    fontWeight: "500",
    borderWidth: 1,
    // marginBottom: 12,
    width: "100%",
  },
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    paddingHorizontal: 43,
    borderRadius: 4,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  footer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 110,
  },
  forgotPassword: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.2,
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
});
