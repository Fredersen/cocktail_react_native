import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Home from '../../pages/Home/Home';
import Search from "../../pages/Search/Search";
import Favorite from "../../pages/Favorite/Favorite";
import Cart from "../../pages/Cart/Cart";
import Cocktail from "../../pages/Cocktail/Cocktail";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const FavoritesStack = createStackNavigator();
const CartStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Cocktail" component={Cocktail} />
        </HomeStack.Navigator>
    );
}

function SearchStackScreen() {
    return (
        <SearchStack.Navigator screenOptions={{headerShown: false}}>
            <SearchStack.Screen name="Search" component={Search} />
            <SearchStack.Screen name="Cocktail" component={Cocktail} />
        </SearchStack.Navigator>
    );
}

function FavoritesStackScreen() {
    return (
        <FavoritesStack.Navigator screenOptions={{headerShown: false}}>
            <FavoritesStack.Screen name="Favorite" component={Favorite} />
            <FavoritesStack.Screen name="Cocktail" component={Cocktail} />
        </FavoritesStack.Navigator>
    );
}

function CartStackScreen() {
    return (
        <CartStack.Navigator screenOptions={{headerShown: false}}>
            <CartStack.Screen name="Cart" component={Cart} />
            <CartStack.Screen name="Cocktail" component={Cocktail} />
        </CartStack.Navigator>
    );
}

export default function Navbar() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === 'Favorites') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopColor: 'transparent'
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Home' }],
                        });
                    },
                })}
            />
            <Tab.Screen
                name="Search"
                component={SearchStackScreen}
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Search' }],
                        });
                    },
                })}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesStackScreen}
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Favorites' }],
                        });
                    },
                })}
            />
            <Tab.Screen
                name="Cart"
                component={CartStackScreen}
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Cart' }],
                        });
                    },
                })}
            />
        </Tab.Navigator>
    );
}


