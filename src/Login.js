import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Btn from './Btn'
import { darkGreen, gray, red } from './Constants'
import Field from './Field'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()

    const strongRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/

    setEmailErrorMsg('')
    setPasswordErrorMsg('')

    if (!strongRegex.test(email) || !email) {
      setEmailErrorMsg('Invalid email.')
    } else if (password.length < 8) {
      setPasswordErrorMsg('Password is too short.')
    } else {
      alert('Account created!')
    }
  }

  const handleEmail = async (text) => {
    setEmail(text)
  }

  const handlePassword = async (text) => {
    setPassword(text)
  }

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Login to your account</Text>
      <Field
        placeholder="Email"
        keyboardType={'email-address'}
        onChangeText={handleEmail}
      />
      <Text style={styles.error}>{emailErrorMsg}</Text>
      <Field
        placeholder="Password"
        onChangeText={handlePassword}
        secureTextEntry={true}
      />
      <Text style={styles.error}>{passwordErrorMsg}</Text>
      <Btn
        textColor="white"
        bgColor={darkGreen}
        btnLabel="Let's go!"
        Press={handleLogin}
      />
      <View style={styles.form}>
        <Text style={styles.callout}>Do not have an account ? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    marginVertical: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: darkGreen,
    fontWeight: 'bold',
  },
  subtitle: {
    color: gray,
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  callout: { fontSize: 16, fontWeight: 'bold' },
  register: { color: darkGreen, fontWeight: 'bold', fontSize: 16 },
  error: { color: red, fontSize: 16 },
})

export default Login
