import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Card, Icon } from "react-native-elements";
import axios from "axios";
export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      url: `https://api-stars.herokuapp.com/star?name=${this.props.navigation.getParam(
        "star_name"
      )}`
    };
  }

  componentDidMount() {
    this.getDetails();
  }
  getDetails = () => {
    const { url } = this.state;
    axios
      .get(url)
      .then(response => {
        this.setState({
            details: response.data.data,
          });
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };



  render() {
      return (
        <View style={styles.container}>
          <Card
            title={details.name}
          >
            <View>
              <Text
                style={styles.cardItem}
              >{`Distance from Earth : ${details.Distance}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Gravity : ${details.Gravity}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Star Mass : ${details.Mass}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Star Radius : ${details.Radius}`}</Text>
              
            </View>
            <View style={[styles.cardItem, { flexDirection: "column" }]}>
              <Text>{details.specifications ? `Specifications : ` : ""}</Text>
              {details.specifications.map((item, index) => (
                <Text key={index.toString()} style={{ marginLeft: 50 }}>
                  {item}
                </Text>
              ))}
            </View>
          </Card>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardItem: {
    marginBottom: 10
  }
});
