import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  BlankBook_button: {
    fontFamily: 'Nunito Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
    fontWeight: '500',
    borderRadius: 0,
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: '1',
    color: 'black',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    '& .fill': {
      width: '100%',
      height: '100%',
      zIndex: '-5',
      position: 'absolute',
      bottom: 0,
      left: 0
    }
  }
})

export default useStyles
