import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.head}>First React Native App</Text>
        </View>

        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require('./assets/sohrab.jpg')}
          />
          <Text style={styles.text}>Mohammad Sohrab Hossain</Text>
        </View>

        <View style={styles.header2}>
          <Button
            color="#5C63D8"
            title="View Profile"
            onPress={() => alert("Coming Soon")}
          />
          <Button
            color='#6FCABA'
            title="Add User"
            onPress={() => alert("Coming Soon")}
          />
        </View>

        <View style={styles.header3}>
          <Text style={styles.about}>About Me</Text>
          <Text style={styles.personal}>
            I am a software developer with a passion for web development.
            I have a strong background in web development and have worked with
            many different languages and frameworks. I am currently working on
            a project that will allow me to create a web application that will
            allow users to create their own personal web pages.
          </Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.bodyText}>Please Log In Here</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Name"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"
            secureTextEntry
          />
          <View style={styles.loginSection}>
            <Button
              color="green"
              title="Log In"
              onPress={() => alert("This is feature will coming soon!")}
            />
            <Button
              color="red"
              title="Register"
              onPress={() => alert("This is feature will coming soon!")}
            />
          </View>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    backgroundColor: '#f5f5f5',
  },

  head: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '5%',
  },

  header: {
    marginTop: '5%',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    marginLeft: '5%',
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  text: {
    marginLeft: '3%',
    fontSize: 20,
    color: '#5C63D8',
  },

  header2: {
    margin: '2%',
    marginTop: '3%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },

  header3: {
    margin: '2%',
  },

  about: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3%',
    color: '#5C63D8',
  },

  personal: {
    fontSize: 15,
    textAlign: 'justify',
  },

  body: {
    margin: '5%',
    marginTop: '5%',
    backgroundColor: '#fff',
  },

  bodyText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'orange',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: '#5C63D8',
    backgroundColor: '#fafafa',
  },

  loginSection: {
    margin: '5%',
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  }

});