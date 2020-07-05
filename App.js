import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Avatar, Button, Card, Title } from 'react-native-paper';

const PointsCard = ({ name, desc, points }) => {
  const [total, add] = useState(0)
  const showAlert = () => add(total + points)
  const showAlert2 = () => alert('u suck')
  const LeftContent = () => ( 
  <Avatar.Text size={36} label={points} /> 
);

  return (
  <View>
  <Text style={styles.paragraph}>
    Total Score: { total }
  </Text>
  <Card>
    <Card.Title title={name} subtitle={desc} left={LeftContent} />
    <Card.Actions>
      <Button onClick={showAlert}>DONE!</Button>
      <Button onClick={showAlert2}>MISSED</Button>
    </Card.Actions>
  </Card>
  </View>
  )
};

export default function App() {
  const content = [
    { name: 'Wake Up Early', desc: 'Up at 6:00 AM', points: 20},
    { name: 'Brush Teeth',   desc: 'Maybe floss, too', points: 10},
    { name: 'Walk Dog',   desc: '15 minute walk around the neighborhood', points: 20},
  ]
  return (
    <View style={styles.container}>
      {content.map(c => <PointsCard key={c.title} name={c.name} desc={c.desc} points={c.points}/> )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
