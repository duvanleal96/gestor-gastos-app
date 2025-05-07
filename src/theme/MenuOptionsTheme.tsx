import { StyleSheet } from 'react-native';

export const styleMenuTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7CE2FA',
    justifyContent: 'center',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatarContainer: {
    marginBottom: 15,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#3498db',
  },
  userInfo: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  menuItems: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
  },
  menuIcon: {
    color: '#3498db',
    marginRight: 15,
    width: 24,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#34495e',
  },
  arrowIcon: {
    color: '#bdc3c7',
  },
  logoutItem: {
    backgroundColor: '#fff5f5',
    marginTop: 20,
  },
  logoutIcon: {
    color: '#e74c3c',
    marginRight: 15,
    width: 24,
  },
  logoutText: {
    color: '#e74c3c',
  },
});