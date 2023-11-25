import { StyleSheet, View, Text } from 'react-native';

function SkillItem(props) {
    return (
        <View style={styles.skillTextContainer} key={props.text}>
            <Text style={styles.skillText}>{props.text}</Text>
        </View> 
    )
}

export default SkillItem

const styles = StyleSheet.create({
    skillTextContainer: {
        alignSelf: "center",
        marginTop: 2,
        marginBottom: 2,
        padding: 4,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
      },
      skillText: {
        color: "white",
      }
})