import axios from "axios";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//Interface, para que um objeto tenha esses exatos dados
interface Fact {
    //Mesmos atributos que retorna na API
    id: string,
    text: string,
    source: string,
    source_url: string,
    language: string,
    permalink: string
}

//Assinatura do componente
export default function C() {
    //Estado para guarda o fato que a API vai retornar
    const [fact, setFact] = useState<Fact>({} as Fact);
    //Estado para dizer se o fato foi carregado ou não
    const [loading, setLoading] = useState(true);
    
    //função para pegar o fato.
    //precisa od async pois se usa o await
    const getFact = async () => {
        //deixa o estado de carregando verdadeiro
        setLoading(true);
        //mudar o valor do estado fato
        //await faz a função esperar o axios retornar a API
        //pegamos apenas o data da resposta, que contem o fato
        setFact((await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random")).data);
        //deixa o estado de carregando falso
        setLoading(false);
    }

    //Parte visual do componente
    return (
        <View style={styles.container}>
            {/**Botão. onPress vai executar a função recebida quando pressionarem o botão */}
            <TouchableOpacity style={styles.btn} onPress={getFact}>
                <Text style={styles.btnText}>Buscar Fato</Text>
            </TouchableOpacity>
            <View style={styles.info}>
                {/**Se carregando, retorna apenas o Text de Sem Fato */}
                { loading ? <Text style={styles.infoText}>Sem Fatos</Text> : 
                    //Se não, retorna isso:
                    <>
                        {/**colocamos entre chaves {} o valores do fato em fact para ser exbido em Text */}
                        <Text style={styles.infoText}>{fact.text}</Text>
                        <Text style={styles.sourceText}>{fact.source}</Text>
                    </>
                }
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
    //Espaçamento em volta dos subcomponentes
    padding: 10
  },
  btn: {
    //Curvatura das bordas
    borderRadius: 15,
    backgroundColor: '#D0042F',
    padding: 10,
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
    marginBottom: 10
  },
  btnText: {
    //Centralizar os textos
    textAlign: 'center',
    //Tamanho da fonte
    fontSize: 18,
    //Deixa a fonte em negrito mais fraco
    fontWeight: 500,
    //cor do texto
    color: 'white'
  },
  info: {
    marginBottom: 15,
    padding: 20,
    backgroundColor: '#dfdfdfff',
    borderRadius: 15,
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
    textAlign: 'center',
    fontSize: 18,
  },
  sourceText: {
    textAlign: 'center',
    fontSize: 18,
    //Deixa a fonte em negrito
    fontWeight: 'bold'
  }
})
