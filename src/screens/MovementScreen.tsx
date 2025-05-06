import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {DataInterface} from '../interface/DataInterface';
import Movements from '../components/organisms/Movements';
import { StyleAccountTheme } from '../theme/AccountTheme';
import { MovementBalance } from '../components/molecules/MovementBalance';

const timeElapsed: number = Date.now();
const today = new Date(timeElapsed);

const movements: DataInterface[] = [
  {
    id: 'n45j228347293n2b3',
    title: 'Salario',
    amount: 120000,
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: 'Duvan',
    outcome: '',
  },
  {
    id: '3ac68afc91aa97f63',
    title: 'Recibo epm',
    amount: 20000,
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: '',
    outcome: 'Duvan',
  },
  {
    id: '4ac68c91a9374aq',
    title: 'arriendo',
    amount: 680000,
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: '',
    outcome: 'Duvan',
  },
];

export const MovementScreen = ({navigation}: any) => {
  /*const { loggedIn } = useContext(AuthContext);
  useEffect(() => {
    if (loggedIn === false) {
      //   navigation.dispatch(StackActions.replace('Login'));
      navigation.navigate('LaunchScreen');
    }
  }, [loggedIn, navigation]);*/

  const renderTransactions = ({item}: ListRenderItemInfo<DataInterface>) => (
    <Movements
      title={item.title}
      amount={item.amount}
      id={item.id}
      image={item.image}
      date={item.date}
      income={item.income}
    />
  );

  return (
    <View style={StyleAccountTheme.container}>
      <View style={StyleAccountTheme.circle} />
      <MovementBalance balance={0} />
      <FlatList
        data={movements}
        renderItem={renderTransactions}
        keyExtractor={movement => movement.id}
      />
    </View>
  );
};
