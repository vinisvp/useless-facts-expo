import { StyleSheet, Text, View } from "react-native";

//Assinatura do componente
export default function B() {
  //Parte visual do componente
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.infoText}>
          {/**Um Text interno para deixar apenas o Nome: em negrito */}
          <Text style={{fontWeight: 'bold'}}>Nome:</Text> Pedro Vinicius
        </Text>
        <Text style={styles.infoText}>
          <Text style={{fontWeight: 'bold'}}>E-Mail:</Text> pedro.vini@fakemail.com
        </Text>
      </View>
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
  info: {
    //Espaçamento na margem em baixo
    marginBottom: 15,
    //Espaçamento em volta dos subcomponentes
    padding: 20,
    backgroundColor: '#dfdfdfff',
    //Curvatura das bordas
    borderRadius: 15,
    //Configuração das sombras
    shadowColor:"#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 0
  },
  infoText: {
    //Centralizar os textos
    textAlign: 'center',
    //Tamanho da fonte
    fontSize: 18,
    //Deixa a fonte em negrito mais fraco
    fontWeight: 500
  }
})