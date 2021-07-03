import React from "react";
import NotificationAlert from "./NotificationAlert";
import { NotificationLevel } from "../../reducers/notificationReducer/notificationReducer";
import { action } from "@storybook/addon-actions";

export default {
    title: "NotificationAlert"
};
  
const actions = {
    onClose: action('onClose'),
    onHide: action('onHide'),
};

export const successAlert = () => 
<NotificationAlert 
    notification={{
    id: '123',
    message: 'This is an success alert message',
    level: NotificationLevel.Success,
    read: false
}}
{...actions}
/>;

export const infoAlert = () => 
<NotificationAlert 
    notification={{
    id: '123',
    message: 'This is an info alert message',
    level: NotificationLevel.Info,
    read: false
    }}
    {...actions}
/>;

export const warnAlert = () => 
<NotificationAlert 
    notification={{
    id: '123',
    message: 'This is an warning alert message',
    level: NotificationLevel.Warning,
    read: false
    }}
    {...actions}
/>;

export const errorAlert = () => 
<NotificationAlert 
    notification={{
    id: '123',
    message: 'This is an error alert message',
    level: NotificationLevel.Error,
    read: false
    }}
    {...actions}
/>;

export const multipleAlert = () => {
    const notificationLevels = [
        NotificationLevel.Info,
        NotificationLevel.Warning,
        NotificationLevel.Error
    ];
    return notificationLevels.map((notificationLevel, index) => {
        return (
            <NotificationAlert
                key={index}
                notification={{
                    id: `${index}`,
                    message: `This is an ${notificationLevel} alert message`,
                    level: notificationLevel,
                    read: false,
                }}
                {...actions} 
            />
        )
    })
}