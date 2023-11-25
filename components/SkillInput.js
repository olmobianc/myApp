import { StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';

function SkillInput(props) {

    const [enteredSkillText, setEnteredSkillText] = useState("")

    function skillInputHnadler(enteredText) {
        setEnteredSkillText(enteredText)
    }

    function addSkillHandler() {
        setEnteredSkillText("")
        props.onPress(enteredSkillText)
    }

    return (
        <>
            <TextInput 
                placeholder='Please insert your best skill!' 
                style={styles.textInput}
                onChangeText={skillInputHnadler}
                value={enteredSkillText}
            ></TextInput>
            <Button 
                title="Add Skill" 
                onPress={addSkillHandler}
            ></Button>
        </>
    )
}

export default SkillInput

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        padding: 5,
        borderColor: "#ccc",
        width: "80%"
    }
})