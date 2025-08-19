import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

//Assinatura do componente
export default function A() {
  //Parte visual do componente
  return (
    <View style={styles.container}>
      {/**
       * Image é o componente que vai exibir a imagem
       * source é a imagem que será usada
      */}
      <Image style={styles.img} source={'https://i.pinimg.com/736x/e6/a9/8a/e6a98a257565d829009a1c1735ee1589.jpg'} />
      <Text style={styles.txt}>Uma bela imagem</Text>
    </View>
  );
}

//Definindo os estilos
const styles = StyleSheet.create({
  container: {
    //Alterar cor do fundo
    backgroundColor: '#313131ff',
    //Deixa a posição dos subcomponentes flexivel
    flex: 1,
    //Centralizar os subcomponentes
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    //Largura e altura da imagem. Isso é necessário para a imagem aparecer
    height: 200, width: 300,
    //Tamanho da borda
    borderWidth: 10,
    //Cor da borda
    borderColor: '#57371aff',
    //Curvatura das bordas
    borderRadius: 15,
    //Configurações de sombra
    shadowColor:"#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 0,
    //Espaçamento na margem em baixo
    marginBottom: 15
  },
  txt: {
    //cor do texto
    color: 'white',
    //Tamanho da fonte
    fontSize: 15,
    //Deixa a fonte em negrito
    fontWeight: 'bold'
  }
})
