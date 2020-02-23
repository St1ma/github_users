import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  emptyContainer: {
    marginTop: 32,
  },
  backButton: {
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 16,
    marginRight: 16,
  },
  login: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  url: {
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  subtitle: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 12,
    lineHeight: 16,
  },
  placeholder: {
    height: 24,
  },
});
