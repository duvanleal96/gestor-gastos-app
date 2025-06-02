import {StyleSheet} from 'react-native';

export const StyleAccountTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  circle: {
    backgroundColor: '#7CE2FA',
    borderRadius: 10000000,
    //bottom: 500,
    top: -1050,
    height: 1200,
    left: -400,
    position: 'absolute',
    width: 1000,
  },
  screenContainer: {
    flex: 1,
  },
  balanceContainer: {
    flex: 1,
  },
  movementContainer: {
    flex: 1,
  },
  balance: {
    color: '#FFFFFF',
    fontSize: 50,
    left: 20,
  },
  txt: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.74)',
    marginTop: 5,
    left: 20,
  },
  mainContainer: {
    backgroundColor: 'white',
    marginBottom: 150,
    padding: 12,
    height: '100%',
  },
  balanceText: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  maxLoanAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
  },
  maxLoanAmountText: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  icon: {
    height: 56,
    width: 48,
    justifyContent: 'flex-end',
    padding: 10,
  },

  inputContainer: {
    height: 56,
    width: 330,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderStyle: 'solid',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    borderColor: 'rgba(0, 0, 0, 0.38)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    textAlignVertical: 'center',
    marginLeft: 12,
    color: 'black',
    fontSize: 16,
    width: '82%',
  },
  button: {
    width: '100%',
    height: 48,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#1554f6',
    marginVertical: 17,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    height: 48,
    textAlignVertical: 'center',
    fontWeight: '500',
  },
  transaction: {
    // backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  reason: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingRight: 5,
  },
  date: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#666666',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    // backgroundColor: 'green',
  },
  amountContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
  incomeAmount: {
    fontSize: 18,
    color: '#228922',
    fontWeight: 'bold',
  },
  outcomeAmount: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  chartContainer: {
      padding: 20,
      backgroundColor: '#fff',
      margin: 10,
      borderRadius: 10,
      elevation: 3,
      alignItems: 'center',
    },
  list: {
      paddingBottom: 30,
  },
  transactionItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      marginVertical: 5,
      backgroundColor: '#fff',
      borderRadius: 8,
      elevation: 1,
  },
    transactionInfo: {
      flex: 1,
    },
    transactionTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
    },
    transactionDate: {
      fontSize: 12,
      color: '#777',
      marginTop: 3,
    },
    transactionAmount: {
      fontSize: 16,
      fontWeight: '700',
    },
    income: {
      color: '#4CAF50',
    },
    expense: {
      color: '#F44336',
    },
});
