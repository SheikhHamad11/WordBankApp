// import { useState } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import Collapsible from "react-native-collapsible";

// const CollapsibleAccordion = ({ title, content }) => {
//     const [collapsed, setCollapsed] = useState(true);

//     return (
//       <View style={styles.container}>
//         <TouchableOpacity onPress={() => setCollapsed(!collapsed)} style={styles.header}>
//           <Text style={styles.title}>{title}</Text>
//         </TouchableOpacity>
//         <Collapsible collapsed={collapsed}>
//           <Text style={styles.content}>{content}</Text>
//         </Collapsible>
//       </View>
//     );
//   };

//   const styles = StyleSheet.create({
//     container: {
//       marginVertical: 10,
//       backgroundColor: 'black',
//       borderRadius: 5,
//       overflow: 'hidden',
//     },
//     header: {
//       padding: 10,
//       backgroundColor: '#f0f0f0',
//     },
//     title: {
//       fontSize: 16,
//       fontWeight: 'bold',
//     },
//     content: {
//       padding: 10,
//     },
//   });

//   export default CollapsibleAccordion;

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { List } from 'react-native-paper';

// const MyComponent = () => (
//   <List.AccordionGroup>
//     <List.Accordion title="Accordion 1" id="1">
//       <List.Item title="Item 1" />
//     </List.Accordion>
//     <List.Accordion title="Accordion 2" id="2">
//       <List.Item title="Item 2" />
//     </List.Accordion>
//       <List.Accordion title="Accordion 3" id="3">
//         <List.Item title="Item 3" />
//         <List.Item title="Item 5" />
//       </List.Accordion>
//   </List.AccordionGroup>
// );

// export default MyComponent;


import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { List } from 'react-native-paper';

const ListItem = ({ title }) => (
  <List.Item
    title={title}
    style={styles.listItem}
  />
);

const ListWithTitles = () => {
  const titles = [
    "Firstly",
    "Secondly",
    "Lastly",
    "To Begin with",
    "In addition",
    "Moreover",
    "Consequently",
    "Furthermore",
    "Subsequently",
    "Regardless of",
    "Despite"
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={titles}
        renderItem={({ item }) => <ListItem title={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    paddingHorizontal: 16, // Example padding
  },
  listItem: {
    // Custom styles for the list item
  },
});

export default ListWithTitles;

