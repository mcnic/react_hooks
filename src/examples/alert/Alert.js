import React from 'react'
import { useAlert } from './AlertContext'

export default function Alert() {
    const alert = useAlert()
    console.log(alert);

    if (!alert.visible) return null

    return (
        <div
            className={'alert alert-danger'}
            onClick={alert.hide}
        >
            <p>{alert.text}</p>
        </div>
    )
}
