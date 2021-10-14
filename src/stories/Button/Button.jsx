import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  backgroundColor,
  borderColor,
  hoverColor,
  hoverSize,
  hoverAlign,
  hoverDirection,
  animationSpeed,
  animation,
  ...props
}) => {
  const axis =
    (hoverDirection === 'up') | (hoverDirection === 'down') ? 'y' : 'x'

  const transition = `${animationSpeed / 1000}s ease-in`

  return (
    <div>
      <button
        type='button'
        className={['BlankBook_button', animation === 'fade' && 'fade'].join(
          ' '
        )}
        style={{
          borderColor,
          color: borderColor
        }}
        {...props}
      >
        {label}
        <div className='fill' style={{ backgroundColor }} />
        {animation === 'slide' && (
          <div
            className={[
              `BlankBook_slide-animation`,
              `BlankBook_slide-animation-${axis}`,
              `${hoverDirection}`
            ].join(' ')}
            style={{
              backgroundColor: hoverColor,
              transition,
              width: axis === 'y' ? hoverSize : undefined,
              height: axis === 'x' ? hoverSize : undefined,
              top: hoverAlign === 'start' && axis === 'x' ? 0 : undefined,
              bottom: hoverAlign === 'end' && axis === 'x' ? 0 : undefined,
              left: hoverAlign === 'start' && axis === 'y' ? 0 : undefined,
              right: hoverAlign === 'end' && axis === 'y' ? 0 : undefined
            }}
          />
        )}
        {animation === 'fade' && (
          <div
            className={[`BlankBook_fade-animation`].join(' ')}
            style={{
              backgroundColor: hoverColor,
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
                  : 'dmf',
              right: hoverAlign === 'end' && axis === 'y' ? 0 : undefined
            }}
          />
        )}
      </button>
    </div>
  )
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  hoverDirection: PropTypes.string,
  hoverColor: PropTypes.string,
  animationSpeed: PropTypes.number,
  hoverSize: PropTypes.string,
  hoverAlign: PropTypes.string,
  animation: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  backgroundColor: null,
  borderColor: 'black',
  hoverDirection: 'up',
  hoverColor: 'red',
  animationSpeed: 300,
  hoverSize: '100%',
  hoverAlign: 'start',
  animation: 'fade',
  onClick: undefined
}
