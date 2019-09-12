import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

export default function FadeInView(props){
  
  const [fadeAdmin] = useState(new Animated.Value(0))  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAdmin,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAdnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}