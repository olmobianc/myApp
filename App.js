import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

//import components
import SkillInput from './components/SkillInput';
import SkillItem from './components/SkillItem';

export default function App() {

  const [skills, setSkills] = useState([])

  function addSkillHandler(enteredSkillText) {
    setSkills(currentSkill => [...currentSkill, enteredSkillText])
  }

  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
       <SkillInput onPress={addSkillHandler} />
      </View>
      
      <View style={styles.textContainer}>
        {skills.map(skill =>
          <SkillItem text={skill} />
        )}
      </View>

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
