import { theme } from "@/app/index/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({


    container:{
        backgroundColor: theme.colors.black,
        padding:24,
        borderRadius: theme.borderRadius.lg,
        position:"absolute",
        bottom:24,
        width:"100%",
        alignSelf: "center",
    },
    header:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems:"center",
      marginBottom:34,

    },
    label:{
       color: theme.colors.white,
       fontSize: theme.fonts.size.body.sm,
       fontFamily:theme.fonts.family.regular,

    },

})