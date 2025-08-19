import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";

//Sub-layout
export default function RootLayout() {
  return (
    //Navagação em Tabs
    //Ele cria abas em baixo da tela, que permite trocar de tela
    <Tabs
      //screenOptions define opções da navegação
      screenOptions={{
        //headerStyle define o estilo do header que fica em cima
        headerStyle: {
          //muda a cor do fundo
          backgroundColor: '#222222ff'
        },
        //cor dos texto do header
        headerTintColor: 'white',
        //Tirar a sombra do header
        headerShadowVisible: false,
        //tabBarStyle define o estilo da barra das abas em baixo
        tabBarStyle: {
          //muda a cor do fundo
          backgroundColor: '#222222ff'
        },
        //corda da opção da aba ativa
        tabBarActiveTintColor: '#D0042F',
        //posição do texto da opção da aba, em relação ao icone
        tabBarLabelPosition: 'beside-icon'
      }}
    >
      {/**Tabs.Screen define uma tela.*/}
      <Tabs.Screen
        //name é o arquivo aonde está a tela
        name="index"
        options={{
          //Como vai ficar o nome da tela no header, e nas opções da aba
          title: "A",
          //modificar o icone. Color é a cor do ativo
          // e focused, é se está selecionado ou não
          tabBarIcon: ({color, focused}) => (
            //Componente do icone
            <Entypo
              //name é o icone a ser usado
              //Se selecionado, será a primeira opção, senão a segunda
              name={focused ? "image-inverted" : "image"} 
              size={24}
              color={color}
            />
          )
        }} />
      <Tabs.Screen
        name="b"
        options={{
          title: "B",
          tabBarIcon: ({color, focused}) => (
            <FontAwesome
              name={focused ? "id-card" : "id-card-o"} 
              size={24}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="c"
        options={{
          title: "C",
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? "thought-bubble" : "thought-bubble-outline"} 
              size={24}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  );
}
