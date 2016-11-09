import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  p: {
    color: 'red',
    textDecoration: 'none'
  }
})

export default styles;

//////////
// style w/o aphrodite:
//////////
// export default {
//   postStyle: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   appStyle: {
//     backgroundColor: 'azure',
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'column',
//     textDecoration: 'none'
//   }
// }
