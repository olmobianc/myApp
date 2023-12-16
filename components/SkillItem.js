import { StyleSheet, View, Text, Pressable } from 'react-native';

function SkillItem(props) {
    return (
        <Pressable onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.skillTextContainer} key={props.id}>
                <Text style={styles.skillText}>{props.text}</Text>
            </View> 
        </Pressable>
        
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