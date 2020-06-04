import React, { useCallback, useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo.png';
import homeImg from '../../assets/home-background.png';

import { styles } from './styles';

const Home: React.FC = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  const handleNavigateToPoints = useCallback(() => {
    navigation.navigate('Points', {
      uf,
      city,
    });
  }, [navigation, uf, city]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <ImageBackground
          source={homeImg}
          style={styles.container}
          imageStyle={{ width: 274, height: 368 }}
        >
          <View style={styles.main}>
            <Image source={logo} />

            <View>
              <Text style={styles.title}>
                Seu marketplace de coleta de resíduos
              </Text>
              <Text style={styles.description}>
                Ajudamos pessoas a encontrarem pontos de coleta de forma
                eficiente.
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <TextInput
              style={styles.input}
              placeholder="Digite a UF"
              value={uf}
              maxLength={2}
              autoCapitalize="characters"
              autoCorrect={false}
              onChangeText={setUf}
            />
            <TextInput
              style={styles.input}
              placeholder="Digite a Cidade"
              value={city}
              autoCorrect={false}
              onChangeText={setCity}
            />

            <RectButton style={styles.button} onPress={handleNavigateToPoints}>
              <View style={styles.buttonIcon}>
                <Text>
                  <Icon name="arrow-right" color="#fff" size={24} />
                </Text>
              </View>
              <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Home;
