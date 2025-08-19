import { Stack } from "expo-router";

//Layout da tela que será exibido na aplicação
export default function RootLayout() {
  return ( 
    //Navagação em Stack
    //Ele acumula as telas e permite voltar para a tela anterior
    <Stack>
      {/**Stack.Screen define uma tela. name é o arquivo de onde está a tela */}
      {/**Nesse caso, a pasta (tabs) será um sub layout */}
      {/**headerShown: false está tirando o header do Stack de cima da tela */}
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
  );
}
