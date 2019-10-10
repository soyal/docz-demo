import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Button = ({ children, type }) => {
  return <button className={classnames('button2', type)}>{children}</button>
}

Button.propTypes = {
  /**
   * this is p1
   */
  p1: PropTypes.string,
  /**
   * this is p2
   */
  p2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  p3: PropTypes.shape({
    a: PropTypes.bool,
    b: PropTypes.string
  })
}

Button.defaultProps = {
  p1: 'default p1'
}

export default Button
