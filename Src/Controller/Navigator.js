// Package Import
import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Strings Import 
import Strings from '../Assets/Strings';

// Theme Import
import { Diem, Colors, FontSize } from '../../Constant/Theme';

// Drawer Content Import
import DrawerContent from '../Components/DrawerContent';

//Screens
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import VerifyAccount from '../Screens/VerifyAccount';
import ShowsTaks from '../Screens/ShowTasks';
import ReviewConsult from '../Screens/ReviewConsult';
import DraftingContract from '../Screens/DraftingContract';
import SpecialRequests from '../Screens/SpecialRequests';
import TermsAndConditions from '../Screens/TermsAndConditions';
import ContactUs from '../Screens/ContactUs';
import Settings from '../Screens/Settings';
import SelectService from '../Screens/SelectService';
import Profile from '../Screens/UserScreens/Profile';
import Notifications from '../Screens/UserScreens/Notifications';
import Orders from '../Screens/UserScreens/Orders';

// Redux 
import { connect } from 'react-redux';
import { ConfigureStore } from '../../Src/Redux/Store/ConfigureStore';



const mapToStateProps = state => ({
    RTL: state.Language.RTL,   // to Get RTL redux State
});

const RTL = ConfigureStore().getState().Language.RTL;  // Declare RTL state From Redux Store


Strings.setLanguage(RTL ? 'en' : 'ar');  // to Handle Language Change 


// Header & Drawer Style
const Styles = StyleSheet.create({
    Header: {
        backgroundColor: Colors.Primary.Color,
        height: Diem.height * 0.11
    },
    HeaderTitle: {
        fontSize: FontSize.medium.fontsize,
        color: Colors.White.Color,
        textAlign: RTL ? 'left' : 'right',
    },
    HeaderLeft: {
        width: Diem.width * 0.15,
        height: '100%',
        alignItems: 'center'
    },
    HeaderRight: {
        width: Diem.width * 0.15,
        height: '100%',
        alignItems: 'center'
    },
    DrawerStyle: {
        backgroundColor: Colors.Primary.Color,
        width: Diem.width,
        height: Diem.height * 0.88,
        marginTop: Diem.height * 0.12,
        borderTopWidth: 1,
    },
});

// Stack Option List 
const StackOption = {
    headerStyle: Styles.Header,
    headerTitleStyle: Styles.HeaderTitle,
    headerTitleAlign: 'left',
    headerLeftContainerStyle: Styles.HeaderLeft,
    headerRightContainerStyle: Styles.HeaderRight,
    headerBackTitleVisible: true
};

// Go Back Function  
const goBack = (props) => {
    const navigation = props.navigation;
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.goBack()}>
            <Image style={{ width: Diem.width * 0.05, resizeMode: 'contain' }} source={require('../Assets/Shape.png')} />
        </TouchableOpacity>
    );
};

// Toggle Drawer Function
const OpenDrawer = (props) => {
    const navigation = props.navigation;
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.toggleDrawer()}>
            <Image style={{ width: Diem.width * 0.06, resizeMode: 'contain' }} source={require('../Assets/Menu.png')} />
        </TouchableOpacity>
    );
};

// Login Stack Screens
const LoginScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    const HeaderEntry2RTL = RTL ? { headerLeft: () => null, headerRight: () => goBack({ navigation }) } : { headerRight: () => null, headerLeft: () => goBack({ navigation }) }
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{ title: Strings.entry, ...StackOption }} />

            <Stack.Screen name='Register' component={Register} options={{ title: Strings.registerScreen, ...StackOption, ...HeaderEntry2RTL }} />

            <Stack.Screen name='VerifyAccount' component={VerifyAccount} options={{ title: Strings.verifyAccount, ...StackOption }} />

        </Stack.Navigator>
    )
};

// Home Stack Screens
const HomeScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    const Header2RTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }), headerRight: () => goBack({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }), headerLeft: () => goBack({ navigation }) }
    return (
        <Stack.Navigator initialRouteName='ShowTasks'>

            <Stack.Screen name='ShowTasks' component={ShowsTaks}
                options={{ title: Strings.showTasks, ...StackOption, ...HeaderRTL }} />

            <Stack.Screen name='ReviewConsult' component={ReviewConsult}
                options={{ title: Strings.reviewAndConsult, ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='DraftingContract' component={DraftingContract}
                options={{ title: Strings.draftingContract, ...StackOption, ...Header2RTL }} />

            <Stack.Screen name='SpecialRequests' component={SpecialRequests}
                options={{ title: Strings.specialRequests, ...StackOption, ...Header2RTL }} />


        </Stack.Navigator>
    )
};

// Profile Stack Screen
const ProfileScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={Profile} options={{ title: Strings.profile, ...StackOption, ...HeaderRTL }} />
        </Stack.Navigator>
    )
};


// Notifications Stack Screen
const NotificationsScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='Notifications' component={Notifications} options={{ title: Strings.notifications, ...StackOption, ...HeaderRTL }} />
        </Stack.Navigator>
    )
};

// Orders Stack Screen
const OrdersScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='Orders' component={Orders} options={{ title: Strings.orders, ...StackOption, ...HeaderRTL }} />
        </Stack.Navigator>
    )
};

// Settings Stack Screen
const SettingsScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='Settings' component={Settings} options={{ title: Strings.settings, ...StackOption, ...HeaderRTL }} />
        </Stack.Navigator>
    )
};

// Contact Stack Screen
const ContactUsScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='ContactUs' component={ContactUs} options={{ title: Strings.contactus, ...StackOption, ...HeaderRTL }} />
        </Stack.Navigator>
    )
};

// Terms and Conditions Stack Screen
const TermsAndConditionsScreen = ({ navigation }) => {
    const Stack = createStackNavigator();
    const HeaderRTL = RTL ? { headerLeft: () => OpenDrawer({ navigation }) } : { headerRight: () => OpenDrawer({ navigation }) };
    return (
        <Stack.Navigator>
            <Stack.Screen name='TermsAndConditions' component={TermsAndConditions} options={{ title: Strings.terms, ...StackOption, ...HeaderRTL }} />
        </Stack.Navigator>
    )
};

// Drawer Screens
const DrawerNavigator = ({ navigation }) => {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerType='slide'
                drawerPosition={RTL ? 'left' : 'right'}
                drawerContentOptions={{ activeBackgroundColor: '#5cbbff', activeTintColor: '#ffffff' }}
                drawerContent={props => <DrawerContent {...props} />}
                drawerStyle={{ width: Diem.width * 0.75 }}
            >
                <Drawer.Screen name='Login' component={LoginScreen} options={{ gestureEnabled: false }} />
                <Drawer.Screen name='Home' component={HomeScreen} />
                <Drawer.Screen name='Profile' component={ProfileScreen} />
                <Drawer.Screen name='Notifications' component={NotificationsScreen} />
                <Drawer.Screen name='Orders' component={OrdersScreen} />
                <Drawer.Screen name='Settings' component={SettingsScreen} />
                <Drawer.Screen name='TermsAndConditions' component={TermsAndConditionsScreen} />
                <Drawer.Screen name='ContactUs' component={ContactUsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
};

// Main Navigator Class
class Container extends Component {
    render() {
        return (
            <DrawerNavigator />
        )
    };
};

export default connect(mapToStateProps)(Container);

