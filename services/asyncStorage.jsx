import AsyncStorage, {useAsyncStorage}from "@react-native-async-storage/async-storage";
async function setStorageDefault() {
  try {
    var results = await AsyncStorage.getAllKeys();
    if (results.length == 0) {
      const statistics = {
        wonGames: 0,
        lostGames: 0,
        percentWon: "0%",
        percentLost: "0%",
      };
      await setItem(JSON.stringify(statistics));
    }
  } catch (error) {
    console.log(error);
  }
}
async function setMatchesPlayed() {
  try {
    var results = await getItem();
    var JSONitem = JSON.parse(results);
    const statistics = {
      wonGames: JSONitem.wonGames,
      lostGames: JSONitem.lostGames + 1,
    };
    await removeItem();
    await setItem(JSON.stringify(statistics));
  } catch (error) {
    console.log(error);
  }
}
async function setMatchWinner() {
  try {
    var results = await getItem();
    var JSONitem = JSON.parse(results);
    const statistics = {
      wonGames: JSONitem.wonGames + 1,
      lostGames: JSONitem.lostGames - 1,
    };
    await removeItem();
    await setItem(JSON.stringify(statistics));
  } catch (error) {
    console.log(error);
  }
}
export { setStorageDefault, setMatchesPlayed, setMatchWinner };
export const { getItem, setItem, removeItem } = useAsyncStorage("@statistics:matches")