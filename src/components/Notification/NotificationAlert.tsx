import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Notification, NotificationLevel } from "../../ducks/notificationReducer/notificationReducer";
import "./NotificationAlert.scss";
interface NotificationAlertProps {
  notification: Notification, 
    onClose?: any,
    onHide?: any
}

function NotificationAlert(props: NotificationAlertProps): React.ReactElement {
    const [show, setShow] = useState(true);
    const variantFromLevel = (level : NotificationLevel) => {
      switch(level) { 
        case NotificationLevel.Success: { 
          return 'success';
        } 
        case NotificationLevel.Warning: { 
          return 'warning';
        } 
        case NotificationLevel.Error: { 
          return 'danger';
        } 
        case NotificationLevel.Info:
        default: { 
          return 'info';
        } 
      } 
    }
  
    const handleClick = () => {
      setShow(false);
      props.onClose();
    };
  
    return(
      <Alert 
        key={props.notification.id}
        className='wrapper'
        show={show}
        variant={variantFromLevel(props.notification.level)} 
        onClose={() => handleClick()} 
        dismissible>
        {props.notification.message}
      </Alert>
    );
  }
  
  export default NotificationAlert;