import Styles from './ActionButton.module.scss'


function ActionButton({action,children,type='primmary'}) {
  return (
    <button onClick={action} className={`${Styles['action-button']} ${Styles[`action-button--${type}`]}`}>{children}</button>
  )
}

export default ActionButton