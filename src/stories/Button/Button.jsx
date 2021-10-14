import React, { useState } from 'react'
import { ThemeContext, PaletteContext } from '../Theme'
import PropTypes from 'prop-types'
import './button.scss'
import useStyles from './style'

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  className,
  label,
  size,
  variant,
  backgroundColor,
  borderRadius,
  borderColor,
  hoverColor,
  hoverBorderColor,
  hoverSize,
  hoverAlign,
  hoverDirection,
  animationSpeed,
  animation,
  border,
  hoverNode,

  children,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const axis =
    (hoverDirection === 'up') | (hoverDirection === 'down') ? 'y' : 'x'

  const transition = `${animationSpeed / 1000}s ease-in`

  const [hover, setHover] = useState(false)

  const newOnMouseEnter = () => {
    if (onMouseEnter) onMouseEnter()
    setHover(true)
  }
  const newOnMouseLeave = () => {
    if (onMouseLeave) onMouseLeave()
    setHover(false)
  }

  let padding
  switch (size) {
    case 'small':
      padding = '8px 10px'
      break
    case 'medium':
      padding = '16px 32px'
      break
    case 'large':
      padding = '20px 64px'
      break
  }

  const themeValue = React.useContext(ThemeContext)
  const paletteValue = React.useContext(PaletteContext)
  const classes = useStyles()

  if (paletteValue) {
    backgroundColor = paletteValue?.primary
  }

  if (themeValue && variant !== 'none') {
    backgroundColor = themeValue?.button[variant]?.backgroundColor
  }

  return (
    <button
      type='button'
      className={[
        classes.BlankBook_button,
        'BlankBook_button',
        animation === 'fade' && 'fade',
        className
      ].join(' ')}
      style={{
        border: border
          ? `1px solid ${
              hover && hoverBorderColor ? hoverBorderColor : borderColor
            }`
          : 'none',
        color: hover && hoverBorderColor ? hoverBorderColor : borderColor,
        transition,
        borderRadius,
        padding
      }}
      onMouseEnter={newOnMouseEnter}
      onMouseLeave={newOnMouseLeave}
      {...props}
    >
      {label}
      {children}
      {
        <div className='BlankBook_fadeNode' style={{ transition }}>
          {hoverNode}
        </div>
      }
      <div className='fill' style={{ backgroundColor }} />
      {animation !== 'none' && (
        <div
          className={[
            animation === 'slide' && `BlankBook_slide-animation`,
            animation === 'slide' && `BlankBook_slide-animation-${axis}`,
            animation === 'slide' && `${hoverDirection}`,
            animation === 'fade' && 'BlankBook_fade-animation'
          ].join(' ')}
          style={{
            backgroundColor: hoverColor,
            borderRadius: borderRadius,
            transition,
            width: axis === 'y' ? hoverSize : undefined,
            height: axis === 'x' ? hoverSize : undefined,
            top:
              (hoverAlign === 'start' && axis === 'x') || axis === 'y'
                ? 0
                : undefined,
            bottom: hoverAlign === 'end' && axis === 'x' ? 0 : undefined,
            left:
              (hoverAlign === 'start' && axis === 'y') || axis === 'x'
                ? 0
                : undefined,
            right: hoverAlign === 'end' && axis === 'y' ? 0 : undefined
          }}
        />
      )}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  label: PropTypes.string,
  hoverDirection: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  animationSpeed: PropTypes.number,
  hoverSize: PropTypes.string,
  hoverAlign: PropTypes.string,
  animation: PropTypes.string,
  border: PropTypes.bool,
  children: PropTypes.node,
  hoverNode: PropTypes.node,
  onClick: PropTypes.func
}

Button.defaultProps = {
  className: '',
  label: '',
  variant: 'none',
  backgroundColor: null,
  size: 'medium',
  borderRadius: '0px',
  borderColor: 'black',
  hoverDirection: 'up',
  hoverBorderColor: undefined,
  hoverColor: 'red',
  animationSpeed: 300,
  hoverSize: '100%',
  hoverAlign: 'start',
  animation: 'none',
  border: true,
  children: '',
  onClick: undefined
}
