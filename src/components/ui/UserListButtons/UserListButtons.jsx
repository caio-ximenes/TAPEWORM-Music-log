import React, { use, useReducer, useState } from 'react'
import Styles from './UserListButtons.module.scss'
import BooleanIconButton from '../BooleanIconButton/BooleanIconButton'
import { capitalize } from '../../../services/textTransformations';

function UserListButtons({buttons,onAction}) {
    const numberOFButtons = buttons.length;
    const buttonsFrac = {
    "--buttons-count": numberOFButtons,
  };

  return (
    <section className={Styles['user-list-buttons']} style={buttonsFrac}>
        {buttons.map((button) => (
            <BooleanIconButton key={button.id} icon={button.name} name={button.name} onClick={(value) => onAction(button, value)} buttonState={button.buttonState} />
        ))}
    </section>
  )
}
export default UserListButtons