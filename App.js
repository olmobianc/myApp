import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

//import components
import SkillInput from './components/SkillInput';
import SkillItem from './components/SkillItem';
import LoginScreen from './screens/loginScreen';

export default function App() {

  const [skills, setSkills] = useState([])

  //add skill to teach
  function addSkillHandler(enteredSkillText) {
    console.log(skills)
    setSkills(currentSkill => [
      ...currentSkill, 
      {text: enteredSkillText, id: Math.random().toString()}
    ])
  }

  //delete skill inserted
  function deleteSkillHandler(id) {
    setSkills(currentSkill => {
      return currentSkill.filter(item => item.id !== id)
    })
  }

  return (
    <View style={styles.appContainer}>

      {/* <View style={styles.inputContainer}>
       <SkillInput onPress={addSkillHandler} />
      </View>
      
      <View style={styles.textContainer}>
        {skills.map(skill =>
          <SkillItem 
            id={skill.id} 
            text={skill.text} 
            onDelete={deleteSkillHandler} 
          />
        )}
      </View> */}

      <LoginScreen />

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 20
  },
  textContainer: {
    alignSelf: "flex-start",
    flexDirection: 'row',
    flexWrap: "wrap",
    gap: 8,
  }
});
