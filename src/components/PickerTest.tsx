import React, {useState} from 'react';
import {NativeBaseProvider, View, Text} from 'native-base';
import {Picker} from '@react-native-picker/picker';

const getTimeOptions = ({am: amText, pm: pmText}: {am: string; pm: string}) => [
  {title: '--', value: ''},
  {title: '12:00 ' + amText, value: '00:00'},
  {title: '12:30 ' + amText, value: '00:30'},
  {title: '1:00 ' + amText, value: '01:00'},
  {title: '1:30 ' + amText, value: '01:30'},
  {title: '2:00 ' + amText, value: '02:00'},
  {title: '2:30 ' + amText, value: '02:30'},
  {title: '3:00 ' + amText, value: '03:00'},
  {title: '3:30 ' + amText, value: '03:30'},
  {title: '4:00 ' + amText, value: '04:00'},
  {title: '4:30 ' + amText, value: '04:30'},
  {title: '5:00 ' + amText, value: '05:00'},
  {title: '5:30 ' + amText, value: '05:30'},
  {title: '6:00 ' + amText, value: '06:00'},
  {title: '6:30 ' + amText, value: '06:30'},
  {title: '7:00 ' + amText, value: '07:00'},
  {title: '7:30 ' + amText, value: '07:30'},
  {title: '8:00 ' + amText, value: '08:00'},
  {title: '8:30 ' + amText, value: '08:30'},
  {title: '9:00 ' + amText, value: '09:00'},
  {title: '9:30 ' + amText, value: '09:30'},
  {title: '10:00 ' + amText, value: '10:00'},
  {title: '10:30 ' + amText, value: '10:30'},
  {title: '11:00 ' + amText, value: '11:00'},
  {title: '11:30 ' + amText, value: '11:30'},
  {title: '12:00 ' + pmText, value: '12:00'},
  {title: '12:30 ' + pmText, value: '12:30'},
  {title: '1:00 ' + pmText, value: '13:00'},
  {title: '1:30 ' + pmText, value: '13:30'},
  {title: '2:00 ' + pmText, value: '14:00'},
  {title: '2:30 ' + pmText, value: '14:30'},
  {title: '3:00 ' + pmText, value: '15:00'},
  {title: '3:30 ' + pmText, value: '15:30'},
  {title: '4:00 ' + pmText, value: '16:00'},
  {title: '4:30 ' + pmText, value: '16:30'},
  {title: '5:00 ' + pmText, value: '17:00'},
  {title: '5:30 ' + pmText, value: '17:30'},
  {title: '6:00 ' + pmText, value: '18:00'},
  {title: '6:30 ' + pmText, value: '18:30'},
  {title: '7:00 ' + pmText, value: '19:00'},
  {title: '7:30 ' + pmText, value: '19:30'},
  {title: '8:00 ' + pmText, value: '20:00'},
  {title: '8:30 ' + pmText, value: '20:30'},
  {title: '9:00 ' + pmText, value: '21:00'},
  {title: '9:30 ' + pmText, value: '21:30'},
  {title: '10:00 ' + pmText, value: '22:00'},
  {title: '10:30 ' + pmText, value: '22:30'},
  {title: '11:00 ' + pmText, value: '23:00'},
  {title: '11:30 ' + pmText, value: '23:30'},
  {title: '11:59 ' + pmText, value: '23:59'},
];

const PickerTest = () => {
  const timeOptions = getTimeOptions({am: 'AM', pm: 'PM'});
  const noValue = '--';
  const [currentStartTime, setCurrentStartTime] = useState('');
  const onTimeChangeHandler = (itemValue: any, type: 'start' | 'end') => {
    if (type === 'start') {
      setCurrentStartTime(itemValue);
    }
  };
  return (
    <NativeBaseProvider>
      <View>
        <Text>@react-native-picker/picker</Text>
        <Picker
          placeholder={noValue}
          selectedValue={currentStartTime}
          onValueChange={(itemValue: any) =>
            onTimeChangeHandler(itemValue, 'start')
          }>
          {timeOptions?.map((value, optionIndex) => (
            <Picker.Item
              label={value.title}
              value={value.value}
              key={`dts${optionIndex}`}
              color="colorForegroundMedium"
            />
          ))}
        </Picker>
      </View>
    </NativeBaseProvider>
  );
};

export default PickerTest;
