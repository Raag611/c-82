import React, { Component } from 'react';
import { Text, View,SafeAreaView,Image,FlatList } from 'react-native';

export default class Feed extends Component {
    render() {
        return (
      <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
       <View style={styles.appTitle}>
         <View style={styles.appIcon}>
          <Image
          source={require("../assets/logo.png")}
          style={styles.iconImage}></Image>
         </View>
         <View style={styles.appTitleTextContainer}>
           <Text> style={styles.appTitleText}>Spectragram</Text>
         </View>
       </View>
       <View style={styles.cardContainer}>
        <Flatlist
         kayExtractor={this.kayExtractor}
         data={post}
         renderItem={this.renderItem} />
       </View>
            
      </View>
        )
    }
}