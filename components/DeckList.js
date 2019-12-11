import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { burgundy, white } from "../utils/colors";
import { connect } from "react-redux";
import Deck from "./Deck";
import { withNavigation } from "react-navigation";

class DeckList extends React.Component {
  render() {
    const { id, title, count, navigation } = this.props;

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigation.navigate("Deck", { deckId: id, deckName: title })
        }
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.count}>
          {count} {count === 1 ? `card` : `cards`}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: white
  },
  count: {
    marginTop: 10,
    fontSize: 22,
    color: white
  },
  item: {
    backgroundColor: burgundy,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 50,
    borderColor: burgundy,
    borderWidth: 1,
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: "center",
    alignItems: "center"
  }
});

function mapStateToProps(decks, props) {
  const { id } = props;
  return {
    id,
    title: decks[id].title,
    count: decks[id].questions.length
  };
}

export default withNavigation(connect(mapStateToProps)(DeckList));
