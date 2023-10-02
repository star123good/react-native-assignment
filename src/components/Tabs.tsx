import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
} from 'react-native';
import {
  TabView,
  SceneMap,
  SceneRendererProps,
  NavigationState,
} from 'react-native-tab-view';
import {
  NativeBaseProvider,
  Box,
  Text,
  Center,
  useColorMode,
  useTheme,
} from 'native-base';

const PrivacyTab = () => (
  <Center flex={1} my="4">
    Privacy Tab
  </Center>
);

const NotificationTab = () => (
  <Center flex={1} my="4">
    Notification Tab
  </Center>
);

const FeedbackTab = () => (
  <Center flex={1} my="4">
    Feedback Tab
  </Center>
);

const AboutTab = () => (
  <Center flex={1} my="4">
    About Tab
  </Center>
);

const initialLayout = {
  width: Dimensions.get('window').width,
};
const renderScene = SceneMap({
  PrivacyTabID: PrivacyTab,
  NotificationTabID: NotificationTab,
  FeedbackTabID: FeedbackTab,
  AboutTabID: AboutTab,
});

function Tabs() {
  const {colorMode} = useColorMode();
  const theme = useTheme();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'PrivacyTabID',
      title: 'Privacy',
    },
    {
      key: 'NotificationTabID',
      title: 'Notification',
    },
    {
      key: 'FeedbackTabID',
      title: 'Feedback',
    },
    {
      key: 'AboutTabID',
      title: 'About',
    },
  ]);

  const renderTabBar = (
    props: SceneRendererProps & {navigationState: NavigationState<any>},
  ) => {
    return (
      <Box
        flexDirection="row"
        borderBottomWidth={1}
        borderColor="rgb(173, 173, 173)"
        backgroundColor={colorMode === 'dark' ? '#dbdbdb' : '#585858'}>
        {props.navigationState.routes.map((route, i) => {
          const borderWidth = index === i ? 2 : 0;
          const borderColor =
            index === i ? 'rgb(2, 120, 171)' : 'rgb(64, 64, 64)';
          return (
            <Box
              borderBottomWidth={borderWidth}
              borderColor={borderColor}
              alignItems="center"
              p="3">
              <Pressable onPress={() => setIndex(i)}>
                <Animated.Text>{route.title}</Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <View style={{height: '100%'}}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={
          {
            // marginTop: StatusBar.currentHeight,
          }
        }
      />
    </View>
  );
}

export const TabsWrapper = () => (
  <NativeBaseProvider>
    <Tabs />
  </NativeBaseProvider>
);

export default Tabs;
