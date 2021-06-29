import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Notification } from '../../ducks/notificationReducer/notificationReducer';
import NotificationAlert from './NotificationAlert';
import {toggleNotificationRead, selectUnreadNotifications } from '../../ducks/notificationReducer/notificationReducer';
import './NotificationQueue.scss';

interface NotificationQueueProps {
  maxAlerts: number,
}

function NotificationQueue(props: NotificationQueueProps): React.ReactElement {
  const allUnreadAlerts : Notification[] = useSelector(selectUnreadNotifications());
  const alertsToShow = allUnreadAlerts.filter((notification: Notification, index: number) => index < props.maxAlerts)
  const dispatch = useDispatch();
  const handleOnCloseOrHide = (notification: Notification) => {
    dispatch(toggleNotificationRead(notification.id))
  };
  return(
    <div className="notificationQueue">
      {alertsToShow.reverse().map(notification => (
        <NotificationAlert
          key={notification.id}
          notification={notification}
          onClose={() => handleOnCloseOrHide(notification)} 
          onHide={() => handleOnCloseOrHide(notification)} 
        />
      ))}
    </div>
  );
}

export default NotificationQueue;
