'use strict';

var React = require('react-native');
var {
  Image,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Component
} = React;

var Icon = require('FontAwesome'),
    getImage = require('./helpers/getImage'),
    HTML = require('./vendor/HTML'),
    screen = require('Dimensions').get('window'),
    ParallaxView = require('react-native-parallax-view');


var ShotDetails = React.createClass({
  render: function() {
    var shotAuthor = this.props.shot.player;

    return (
      <ParallaxView
        backgroundSource={getImage.shotImage(this.props.shot)}
        windowHeight={300}
        >
        <View>
          <View style={styles.headerContent}>
            <Image source={getImage.authorAvatar(shotAuthor)}
                   style={styles.shotAuthorAvatar} />
            <Text style={styles.shotTitle}>{this.props.shot.title}</Text>
            <Text style={styles.shotAuthorContent}>by <Text style={styles.shotAuthor}>{shotAuthor.name}</Text></Text>
          </View>
          <View style={styles.mainSection}>
            <View style={styles.shotDetailsRow}>
              <View style={styles.shotCounter}>
                <Icon name="heart-o" size={24} color="#333"/>
                <Text style={styles.shotCounterText}> {this.props.shot.likes_count} </Text>
              </View>
              <View style={styles.shotCounter}>
                <Icon name="comments-o" size={24} color="#333"/>
                <Text style={styles.shotCounterText}> {this.props.shot.comments_count} </Text>
              </View>
              <View style={styles.shotCounter}>
                <Icon name="eye" size={24} color="#333"/>
                <Text style={styles.shotCounterText}> {this.props.shot.views_count} </Text>
              </View>
            </View>
            <View style={styles.separator} />
            <Text>
              <HTML value={this.props.shot.description}/>
            </Text>
          </View>
        </View>
      </ParallaxView>
    );
  },
});

var styles = StyleSheet.create({
  headerContent: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 40,
    alignItems: 'center',
    width: screen.width,
    backgroundColor: '#fff'
  },
  shotTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ea4c89',
    lineHeight: 18
  },
  shotAuthorContent: {
    fontSize: 12
  },
  shotAuthor: {
    fontWeight: '900',
    lineHeight: 18
  },
  shotAuthorAvatar: {
    borderRadius: 40,
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: 60,
    left: screen.width / 2 - 40,
    borderWidth: 2,
    borderColor: '#fff'
  },
  rightPane: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  shotDetailsRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  shotCounter: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  shotCounterText: {
    color: '#333'
  },
  mainSection: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'stretch',
    padding: 10
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1 / PixelRatio.get(),
    marginVertical: 10,
  }
});

module.exports = ShotDetails;
