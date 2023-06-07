import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/login";
import Contactlist from './screens/courselist';
import Attendacesignin from './screens/attendancesignin';
import Attendacesigninfingerprint from './screens/attendancesignin(fingerprint)';
import Courserattendancepage from './screens/courseattendancepage(lecturer)';
import Courserattendancepage2 from './screens/courseattendacepage(lecturer)';
import StackNav from './navigations/stacknav';
import BottomNav from './navigations/bottomtabnav';
import Navs from './navigations/navs';
export default function App() {
  return (
    <View style={styles.container}>
     <Navs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
