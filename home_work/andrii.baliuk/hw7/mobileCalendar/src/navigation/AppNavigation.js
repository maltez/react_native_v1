import { createStackNavigator, createAppContainer } from "react-navigation";
import Calendar from "../screens/Calendar";
import MonthDetailsScreen from "../screens/MonthDetailsScreen";
import DayDetailsScreen from "../screens/DayDetailsScreen";

console.disableYellowBox = true;

const AppNavigator = createStackNavigator(
  {
    Calendar: Calendar,
    MonthDetails: MonthDetailsScreen,
    DayDetails: DayDetailsScreen
  },
  {
    initialRouteName: "Calendar",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
