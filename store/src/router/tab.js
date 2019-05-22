import React from 'react'
import Home from '../pages/Home'
// import Product from '../pages/Product'
import Category from '../pages/Category'
import Cart from '../pages/Cart'
import My from '../pages/My'

import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation'
import { Image } from 'react-native'

const HomeScreen = createStackNavigator(
  { Home },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '首页'
      // tabBarIcon: ({ focused, horizontal, tintColor }) => {
      //   return (
      //     <Image
      //       source={
      //         focused
      //           ? require('../images/toolbar/homeselected.png')
      //           : require(`../images/toolbar/home.png`)
      //       }
      //       style={{ width: 30, height: 30 }}
      //     />
      //   )
      // }
    }),
    defaultNavigationOptions: {
      title: '首页'
    }
  }
)

const CategoryScreen = createStackNavigator(
  {
    Category
  },
  {
    defaultNavigationOptions: {
      title: '分类'
    }
  }
)

const RootTabs = createBottomTabNavigator({
  HomeScreen,
  CategoryScreen
})

// const RootTabs = createBottomTabNavigator(
//   {
//     HomeScreen,
//     Category: {
//       screen: Category,
//       navigationOptions: ({ navigation }) => ({
//         tabBarLabel: '分类',
//         tabBarIcon: ({ focused, horizontal, tintColor }) => {
//           return (
//             <Image
//               source={
//                 focused
//                   ? require('../images/toolbar/categoryselected.png')
//                   : require(`../images/toolbar/category.png`)
//               }
//               style={{ width: 30, height: 30 }}
//             />
//           )
//         }
//       })
//     },
//     Cart: {
//       screen: Cart,
//       navigationOptions: ({ navigation }) => ({
//         tabBarLabel: '购物车',
//         tabBarIcon: ({ focused, horizontal, tintColor }) => {
//           return (
//             <Image
//               source={
//                 focused
//                   ? require('../images/toolbar/cartselected.png')
//                   : require(`../images/toolbar/cart.png`)
//               }
//               style={{ width: 30, height: 30 }}
//             />
//           )
//         }
//       })
//     },
//     My: {
//       screen: My,
//       navigationOptions: ({ navigation }) => ({
//         tabBarLabel: '我的',
//         tabBarIcon: ({ focused, horizontal, tintColor }) => {
//           return (
//             <Image
//               source={
//                 focused
//                   ? require('../images/toolbar/myselected.png')
//                   : require(`../images/toolbar/my.png`)
//               }
//               style={{ width: 30, height: 30 }}
//             />
//           )
//         }
//       })
//     }
//   },
//   {
//     initialRouteName: 'HomeScreen',
//     tabBarOptions: {
//       activeTintColor: 'rgb(171, 149, 109)',
//       inactiveTintColor: '#989898'
//     }
//   }
// )

export default createAppContainer(RootTabs)