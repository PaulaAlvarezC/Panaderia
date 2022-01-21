import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import React from 'react';
import styles from './style';

const CategoryItem = ({item, onSelected}) => {
    return (
       
        <View style={styles.container}>
            <TouchableOpacity 
                style={[styles.container, { backgroundColor: item.color}]}
                onPress={() => onSelected(item)}
            >
        <View>
        <Text style={styles.title}>{item.title}</Text>
        </View>
          </TouchableOpacity>
         </View>
      
    );
  };
  
  
  
  export default CategoryItem;