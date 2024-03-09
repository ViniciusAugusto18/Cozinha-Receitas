import { ActivityIndicator } from "react-native"

import { styles } from "./styles"
import { theme } from "@/app/index/theme"

export function Loading() {
  return (
    <ActivityIndicator
      style={styles.container}
      color={theme.colors.green_600}
    />
  )
}
